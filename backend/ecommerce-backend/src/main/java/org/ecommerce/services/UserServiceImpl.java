package org.ecommerce.services;

import lombok.RequiredArgsConstructor;
import org.ecommerce.exceptions.InvalidPasswordException;
import org.ecommerce.exceptions.ResourceNotFoundException;
import org.ecommerce.mapper.UserMapper;
import org.ecommerce.models.dto.RegisteredUser;
import org.ecommerce.models.entity.Role;
import org.ecommerce.models.entity.User;
import org.ecommerce.repositories.RoleRepository;
import org.ecommerce.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Collections;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserServiceImpl implements UserService{

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;

    @Value("${default.role}")
    private String defaultRole;

    public User registerOneUser(RegisteredUser registeredUser) {
        validatePassword(registeredUser);
        User user = userMapper.toUser(registeredUser);
        user.setPassword(passwordEncoder.encode(registeredUser.getPassword()));
        Role role = roleRepository.findByName(defaultRole)
                .orElseThrow(() -> new ResourceNotFoundException("role", "name",defaultRole));
        user.setRoles(Collections.singleton(role));
        return userRepository.save(user);
    }

    public Optional<User> findByUsername(String username){
        return userRepository.findByUsername(username);
    }

    private void validatePassword(RegisteredUser registeredUser) {
        if (!registeredUser.getPassword().equals(registeredUser.getRepeatedPassword())) {
            throw new InvalidPasswordException("Las contraseñas no coinciden");
        }
    }

}
