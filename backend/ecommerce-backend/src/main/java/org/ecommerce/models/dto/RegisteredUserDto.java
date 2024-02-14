package org.ecommerce.models.dto;

import lombok.Getter;
import lombok.Setter;
import org.ecommerce.models.entity.Role;
import java.util.Set;

@Getter @Setter
public class RegisteredUserDto {
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private Set<Role> roles;
    private String jwtToken;

}
