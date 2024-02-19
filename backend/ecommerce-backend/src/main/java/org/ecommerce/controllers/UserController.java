package org.ecommerce.controllers;

import lombok.AllArgsConstructor;
import org.ecommerce.models.dto.RegisteredUser;
import org.ecommerce.models.dto.RegisteredUserDto;
import org.ecommerce.services.auth.AuthenticationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class UserController {

    private AuthenticationService authenticationService;


//    @CrossOrigin(origins = "https://www.google.com")
    @PostMapping("/user")
    public ResponseEntity<RegisteredUserDto> registerUser(@RequestBody RegisteredUser user) {
        RegisteredUserDto registeredUser = authenticationService.registerOneUser(user);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }

    @PostMapping("/auth")
    public ResponseEntity<String> findAll(){
        return ResponseEntity.ok("Hello World");
    }

}
