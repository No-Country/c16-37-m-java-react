package org.ecommerce.controllers;

import org.ecommerce.models.dto.CartDTO;
import org.ecommerce.models.dto.CartItemsDTO;
import org.ecommerce.models.entity.Cart;
import org.ecommerce.models.entity.User;
import org.ecommerce.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/get-cart")
    public CartDTO getCart(@AuthenticationPrincipal UserDetails userDetails){
        User user = (User) userDetails;

        return cartService.getCart(user);
    }

    /*@PostMapping("/add-product")
    public ResponseEntity<CartDTO> addProductToCart(@RequestParam Long productId){
        CartDTO cartDTO = cartService.addProductToCart(cartItemsDTO);
        return  ResponseEntity.ok(cartDTO);
    }*/
}
