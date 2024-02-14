package org.ecommerce.services;

import lombok.AllArgsConstructor;
import org.ecommerce.exceptions.InvalidPasswordException;
import org.ecommerce.mapper.UserMapper;
import org.ecommerce.models.dto.RegisteredUser;
import org.ecommerce.models.entity.User;
import org.ecommerce.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;


@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;
    private UserMapper userMapper;

    public User registerOneUser(RegisteredUser registeredUser) {
        validatePassword(registeredUser);
        User user = userMapper.toUser(registeredUser);
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
