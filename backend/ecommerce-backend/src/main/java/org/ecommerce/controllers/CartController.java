package org.ecommerce.controllers;

import org.ecommerce.models.dto.CartItemsDTO;
import org.ecommerce.models.entity.CartItems;
import org.ecommerce.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.ecommerce.models.entity.Cart;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired private CartService cartService;
    @Autowired private

    @GetMapping("/carts")
    ResponseEntity<List<Cart>> getAllCarts() {
        List<Cart> carts = cartService.getAllCart();
        return ResponseEntity.ok(carts);
    }
    @GetMapping("/carts")
    public ResponseEntity<List<CartItems>> getAllCartItems() {
        List<CartItems> cartItems= cartService.getAllCartItems();
        return ResponseEntity.ok(cartItems);
    }
    @PostMapping("/{cartId}/cartItems")
    public ResponseEntity<Cart> addCartItem (@PathVariable Long cartId, @RequestBody CartItemsDTO cartItemsDTO) throws Exception {
        Cart updatedCart = cartService.addCartItem(cartId, cartItemsDTO);
        return ResponseEntity.ok(updatedCart);
    }
    @DeleteMapping("/{cartItemsId}")
    public ResponseEntity<Void> deleteCartItems (@PathVariable Long cartItemsId) throws Exception {
        cartService.deleteCartItems(cartItemsId);
        return ResponseEntity.noContent().build();
    }
    @DeleteMapping("/carts/{cartId}/cartItems")
    public ResponseEntity<Void> clearCart (@PathVariable Long cartId) {
        cartService.clearCart(cartId);
        return ResponseEntity.noContent().build();
    }
}
