package org.ecommerce.config.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.ecommerce.exceptions.ResourceNotFoundException;
import org.ecommerce.models.entity.JwtToken;
import org.ecommerce.models.entity.User;
import org.ecommerce.repositories.JwtTokenRepository;
import org.ecommerce.services.UserService;
import org.ecommerce.services.auth.JwtService;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Date;
import java.util.Optional;

@AllArgsConstructor
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private JwtService jwtService;
    private UserService userService;
    private JwtTokenRepository jwtTokenRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String jwt = jwtService.extractTokenFromRequest(request);
        if(jwt == null || !StringUtils.hasText(jwt)){
            filterChain.doFilter(request,response);
            return;
        }
        Optional<JwtToken> token = jwtTokenRepository.findByToken(jwt);
        boolean isValid = validateToken(token);
        if(!isValid){
            filterChain.doFilter(request,response);
            return;
        }

        String username = jwtService.extractUsername(jwt);
        User user = userService.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException("User","username",username));
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(username,null, user.getAuthorities());
        authenticationToken.setDetails(new WebAuthenticationDetails(request));
        SecurityContextHolder.getContext().setAuthentication(authenticationToken);
        filterChain.doFilter(request,response);
    }

    private boolean validateToken(Optional<JwtToken> optionalToken) {
        if (optionalToken.isEmpty()){
            return false;
        }
        JwtToken token = optionalToken.get();
        Date now = new Date((System.currentTimeMillis()));
        boolean isValid = token.isValid() && token.getExpiration().after(now);

        if(!isValid){
            updateTokenStatus(token);
        }
        return isValid;

    }

    private void updateTokenStatus(JwtToken token) {
        token.setValid(false);
        jwtTokenRepository.save(token);
    }

}
