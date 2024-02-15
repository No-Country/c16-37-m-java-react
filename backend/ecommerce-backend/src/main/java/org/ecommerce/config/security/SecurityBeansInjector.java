package org.ecommerce.config.security;

import lombok.AllArgsConstructor;
import org.ecommerce.exceptions.ResourceNotFoundException;
import org.ecommerce.repositories.UserRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@AllArgsConstructor
@Configuration
public class SecurityBeansInjector {

    private UserRepository userRepository;

    // El método getAuthenticationManager de AuthenticationConfiguration devuelve un AuthenticationManager
    // ya configurado por Spring Security. Este AuthenticationManager se utiliza para manejar la autenticación en tu aplicación.
    @Bean
    public AuthenticationManager getAuthenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    // Crear un DaoAuthenticationProvider, que es una implementación de AuthenticationProvider
    // que puede autenticar solicitudes utilizando un UserDetailsService y un PasswordEncoder.
    // El UserDetailsService se utiliza para cargar los datos del usuario y el PasswordEncoder se utiliza para comparar las contraseñas.
    @Bean
    public AuthenticationProvider getAuthenticationProvider(){
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        authenticationProvider.setUserDetailsService(userDetailsService());
        return authenticationProvider;
    }

    // El PasswordEncoder se utiliza para codificar y decodificar contraseñas.
    // En este caso, se utiliza BCryptPasswordEncoder, que es una implementación de PasswordEncoder.
    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    // El UserDetailsService se utiliza para cargar los datos del usuario.
    // En este caso, se implementa un método que recibe un nombre de usuario y devuelve un objeto UserDetails.
    // El userDetails es una interfaz que representa los detalles de un usuario, como su nombre de usuario, contraseña y roles.
    // Spring Security proporciona una implementación de UserDetailsService llamada InMemoryUserDetailsManager, que se utiliza para cargar los datos del usuario desde la memoria.
    // En este caso, se utiliza una implementación personalizada de UserDetailsService que carga los datos del usuario desde la base de datos.
    // La diferencia de User y UserDetails es que User es una clase que representa un usuario en la base de datos, mientras que UserDetails es una interfaz que representa los detalles de un usuario.
    // Por lo tanto, UserDetailsService es una interfaz que se utiliza para cargar los datos del usuario, mientras que UserDetails es una interfaz que representa los detalles de un usuario.
    // Por ejemplo, UserDetails tiene métodos como getUsername(), getPassword() y getAuthorities(), que se utilizan para obtener el nombre de usuario, la contraseña y los roles de un usuario, respectivamente.
    // Los detalles del usuario se utilizan para autenticar al usuario en la aplicación.

    @Bean
    public UserDetailsService userDetailsService(){
        return username -> userRepository.findByUsername(username)
                    .orElseThrow(() -> new ResourceNotFoundException("user","username",username));
    }


}

