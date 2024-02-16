package org.ecommerce.controllers;

import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import org.ecommerce.models.dto.AuthenticationResponse;
import org.ecommerce.models.dto.LogoutResponse;
import org.ecommerce.models.dto.UserRequest;
import org.ecommerce.models.entity.User;
import org.ecommerce.services.auth.AuthenticationService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1")
public class AuthenticationController {

    private AuthenticationService authenticationService;


    @PostMapping("login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody UserRequest userRequest){
        AuthenticationResponse authUser = authenticationService.login(userRequest);
        return new ResponseEntity<>(authUser, HttpStatus.OK);
    }

    @PostMapping("/logout")
    public ResponseEntity<LogoutResponse> logout(HttpServletRequest request){
        authenticationService.logout(request);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/profile")
    public ResponseEntity<User> findMyProfile(){
        User user = authenticationService.findLoggerUser();
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

}
