package org.ecommerce.services;

import org.ecommerce.models.entity.User;
import java.util.Optional;

public interface UserService {
    User registerOneUser();
    Optional<User> findOneByUsername(String username);
}
