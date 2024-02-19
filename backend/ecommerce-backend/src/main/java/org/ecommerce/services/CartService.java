package org.ecommerce.services;

import org.ecommerce.models.dto.CartDTO;
import org.ecommerce.models.entity.Cart;
import org.ecommerce.models.entity.User;
import org.ecommerce.repositories.CartItemsRepository;
import org.ecommerce.repositories.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartItemsRepository cartItemsRepository;

    public CartDTO getCart(User user){
        Cart cart = cartRepository.findByUserId(user.getId());
        return CartDTO.fromEntity(cart);
    }

    /*public CartDTO addProductToCart(Long productId){
        Product product =
    }*/
}
