package org.ecommerce.services.auth;

import lombok.AllArgsConstructor;
import org.ecommerce.mapper.UserMapper;
import org.ecommerce.models.dto.RegisteredUser;
import org.ecommerce.models.dto.RegisteredUserDto;
import org.ecommerce.models.entity.User;
import org.ecommerce.services.UserService;
import org.springframework.stereotype.Service;

import java.util.Map;

@AllArgsConstructor
@Service
public class AuthenticationService {

    private UserMapper userMapper;
    private UserService userService;
    private JwtService jwtService;

    public RegisteredUserDto registerOneUser(RegisteredUser registeredUser) {
        User user = userService.registerOneUser(registeredUser);
        RegisteredUserDto registeredUserDto = userMapper.userToRegisteredUserDto(user);
        String jwtToken = jwtService.generateToken(user, generateExtraClaims(user));
        registeredUserDto.setJwtToken(jwtToken);
        return registeredUserDto;
    }

    private Map<String, Object> generateExtraClaims(User user) {
        return Map.of(
                "name", user.getUsername(),
                "authorities", user.getAuthorities()
        );
    }

}
