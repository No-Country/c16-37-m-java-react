package org.ecommerce.services;

import org.ecommerce.models.dto.RegisteredUser;
import org.ecommerce.models.entity.User;
import java.util.Optional;

public interface UserService {
    User registerOneUser(RegisteredUser registeredUser);
    Optional<User> findByUsername(String username);
}
