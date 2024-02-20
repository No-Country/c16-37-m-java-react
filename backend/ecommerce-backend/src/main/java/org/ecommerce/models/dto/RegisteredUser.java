package org.ecommerce.models.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class RegisteredUser {
    @Size(min = 2,message = "{user.username.size}")
    @NotBlank(message = "{user.username.notBlank}")
    private String username;

    @Size(min = 2,message = "{user.firstname.size}")
    @NotBlank(message = "{user.firstname.notBlank}")
    private String firstName;

    @Size(min = 2,message = "{user.lastname.size}")
    @NotBlank(message = "{user.lastname.notBlank}")
    private String lastName;

    @Email(message = "{user.email.format}")
    @NotBlank(message = "{user.email.notBlank}")
    private String email;

    @Size(min = 10,message = "{user.number.size}")
    @NotBlank(message = "{user.number.notBlank}")
    private String number;

    @Size(min = 5,message = "{user.password.size}")
    @NotBlank(message = "{user.password.notBlank}")
    private String password;
    private String repeatedPassword;
}
