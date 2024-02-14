package org.ecommerce.controllers;

import org.ecommerce.models.dto.RegisteredUser;
import org.ecommerce.models.dto.RegisteredUserDto;
import org.ecommerce.services.AuthenticationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class UserController {

    private AuthenticationService authenticationService;

    @PostMapping("/user")
    public ResponseEntity<RegisteredUserDto> registerUser(@RequestBody RegisteredUser user) {
        RegisteredUserDto registeredUser = authenticationService.registerOneUser(user);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }

}
