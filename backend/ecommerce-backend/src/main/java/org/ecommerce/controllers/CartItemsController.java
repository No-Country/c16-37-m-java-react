package org.ecommerce.controllers;

import org.aspectj.bridge.Message;
import org.ecommerce.models.dto.CartItemsDTO;
import org.ecommerce.models.entity.Cart;
import org.ecommerce.models.entity.CartItems;
import org.ecommerce.services.CartItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cart")
public class CartItemsController {

    @Autowired
    private CartItemsService cartItemsService;

    @GetMapping("/get-cart")
    public ResponseEntity<Object> getAllCartItems(){
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        String userName = userDetails.getUsername();

        return new ResponseEntity<>(this.cartItemsService.getAllCartItemsService(userName), HttpStatus.OK);
    }
    @GetMapping("/count/{user_id}")
    public ResponseEntity<Long> countByUser(@PathVariable("user_id")Long id){
        return new ResponseEntity<>(this.cartItemsService.getCountByUser(id), HttpStatus.OK);
    }
}
