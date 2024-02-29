package org.ecommerce.services.auth;

import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import org.ecommerce.exceptions.ResourceNotFoundException;
import org.ecommerce.mapper.UserMapper;
import org.ecommerce.models.dto.AuthenticationResponse;
import org.ecommerce.models.dto.RegisteredUser;
import org.ecommerce.models.dto.RegisteredUserDto;
import org.ecommerce.models.dto.UserRequest;
import org.ecommerce.models.entity.JwtToken;
import org.ecommerce.models.entity.User;
import org.ecommerce.repositories.JwtTokenRepository;
import org.ecommerce.services.UserService;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.Map;
import java.util.Optional;


@AllArgsConstructor
@Service
public class AuthenticationService {

    private UserMapper userMapper;
    private UserService userService;
    private JwtService jwtService;
    private AuthenticationManager authenticationManager;
    private JwtTokenRepository jwtTokenRepository;

    @Transactional
    public RegisteredUserDto registerOneUser(RegisteredUser registeredUser) {
        User user = userService.registerOneUser(registeredUser);
        String jwtToken = jwtService.generateToken(user, generateExtraClaims(user));
        saveToken(user,jwtToken);
        RegisteredUserDto registeredUserDto = userMapper.userToRegisteredUserDto(user);
        registeredUserDto.setJwtToken(jwtToken);
        return registeredUserDto;
    }

    private Map<String, Object> generateExtraClaims(User user) {
        return Map.of(
                "name", user.getUsername(),
                "authorities", user.getAuthorities()
        );
    }

    @Transactional
    public AuthenticationResponse login(UserRequest userRequest) {
        Authentication authentication = new UsernamePasswordAuthenticationToken(
                userRequest.getUsername(),userRequest.getPassword()
        );
        authenticationManager.authenticate(authentication);
        User userDetails = userService.findByUsername(userRequest.getUsername()).orElseThrow(()-> new ResourceNotFoundException("user","username",userRequest.getUsername()));
        String jwtToken = jwtService.generateToken(userDetails,generateExtraClaims(userDetails));
        saveToken(userDetails,jwtToken);
        AuthenticationResponse authResponse = new AuthenticationResponse();
        authResponse.setJwtToken(jwtToken);
        return authResponse;
    }

    public void saveToken(User user, String jwtToken) {
        JwtToken token = new JwtToken();
        token.setToken(jwtToken);
        token.setUser(user);
        token.setExpiration(jwtService.extractExpiration(jwtToken));
        token.setValid(true);
        jwtTokenRepository.save(token);
    }

    @Transactional
    public User findLoggerUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || auth instanceof AnonymousAuthenticationToken) {
            throw new AuthenticationCredentialsNotFoundException("El usuario no está autenticado.");
        }
        String username = auth.getName();
        return userService.findByUsername(username).orElseThrow(()-> new ResourceNotFoundException("user","username",username));
    }

    public void logout(HttpServletRequest request) {
        String jwt = jwtService.extractTokenFromRequest(request);
        if(jwt == null || !StringUtils.hasText(jwt)) return;
        Optional<JwtToken> token = jwtTokenRepository.findByToken(jwt);
        if (token.isPresent() && token.get().isValid()){
            token.get().setValid(false);
            jwtTokenRepository.save(token.get());
        }
    }

}
