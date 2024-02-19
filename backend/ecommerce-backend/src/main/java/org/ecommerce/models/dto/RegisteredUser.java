package org.ecommerce.models.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RegisteredUser {
    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String number;
    private String password;
    private String repeatedPassword;
}
