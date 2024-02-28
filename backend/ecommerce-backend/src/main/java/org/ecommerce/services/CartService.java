package org.ecommerce.services;

import org.ecommerce.models.dto.CartItemsDTO;
import org.ecommerce.models.entity.Cart;
import org.ecommerce.models.entity.CartItems;
import org.ecommerce.repositories.CartItemsRepository;
import org.ecommerce.repositories.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired private CartRepository cartRepository;
    @Autowired private CartItemsRepository cartItemsRepository;

    public List<Cart> getAllCart() {
        return cartRepository.findAll();
    }
    public List<CartItems> getAllCartItems() {
        return cartItemsRepository.findAll();
    }
    public Cart addCartItem (Long cartId, CartItemsDTO cartItemsDTO) throws Exception{
        Cart cart = cartRepository.findById(cartId).orElseThrow(() -> new Exception("Cart not found"));

        return cartRepository.save(cart);
    }
    public void deleteCartItems (Long cartItemsId){
        cartRepository.deleteById(cartItemsId);
    }
    public void clearCart (Long cartId) {
        cartItemsRepository.deleteByCartId(cartId);
    }
}
