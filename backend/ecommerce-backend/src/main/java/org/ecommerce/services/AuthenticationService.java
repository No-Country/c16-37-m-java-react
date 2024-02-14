package org.ecommerce.services;

import lombok.AllArgsConstructor;
import org.ecommerce.mapper.UserMapper;
import org.ecommerce.models.dto.RegisteredUser;
import org.ecommerce.models.dto.RegisteredUserDto;
import org.ecommerce.models.entity.User;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class AuthenticationService {

    private UserMapper userMapper;
    private UserService userService;

    public RegisteredUserDto registerOneUser(RegisteredUser registeredUser) {
        User user = userService.registerOneUser(registeredUser);
        return userMapper.userToRegisteredUserDto(user);
    }

}
