package org.ecommerce.models.dto;

import lombok.Getter;
import lombok.Setter;
import org.ecommerce.models.entity.User;

@Getter @Setter
public class UserDto {
    private String username;
    private String password;

    public UserDto(User user) {
        this.username = user.getUsername();
        this.password = user.getPassword();
    }
}
