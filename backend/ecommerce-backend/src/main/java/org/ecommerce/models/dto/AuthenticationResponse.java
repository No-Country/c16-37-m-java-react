package org.ecommerce.models.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class AuthenticationResponse {
    private String jwtToken;
}
