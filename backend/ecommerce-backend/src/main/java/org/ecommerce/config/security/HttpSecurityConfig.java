package org.ecommerce.config.security;

import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@AllArgsConstructor
@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
public class HttpSecurityConfig {

    private AuthenticationProvider daoAuthenticationProvider;
    private JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(AbstractHttpConfigurer::disable) // Se deshabilita el csrf por ser una API REST
                .sessionManagement(sessionManagement -> sessionManagement
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)) // Se crea una sesión sin estado (sin cookies) para la API REST
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class) // Se agrega el filtro de autenticación JWT antes del filtro de autenticación por usuario y contraseña
                .authenticationProvider(daoAuthenticationProvider) // Se configura el proveedor de autenticación personalizado el cual se encarga de manejar la autenticación de los usuarios
                .authorizeHttpRequests(authorizeRequests -> { // Se configuran las rutas que requieren autenticación
                    authorizeRequests.requestMatchers(HttpMethod.POST, "/api/v1/user").permitAll();
                    authorizeRequests.requestMatchers(HttpMethod.POST, "/api/v1/login").permitAll();
                    authorizeRequests.requestMatchers(HttpMethod.POST, "/api/v1/profile").permitAll();
                    authorizeRequests.requestMatchers(HttpMethod.POST, "/api/v1/logout").permitAll();
                    authorizeRequests.anyRequest().authenticated();
                }).build();
    }

}
