package org.ecommerce.models.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.ecommerce.models.entity.Cart;
import org.ecommerce.models.entity.User;

import java.util.Set;
import java.util.stream.Collectors;

@Getter @Setter
public class CartDTO {

    private long id;
    private double totalPrice;
    private User user;
    private Set<CartItemsDTO> cartItemsSet;

    private CartDTO(Cart cart){
        this.id = cart.getId();
        this.totalPrice = cart.getTotalPrice();
        this.user = cart.getUser();
        this.cartItemsSet = cart.getCartItemsSet()
                                .stream()
                                .map(cartItem -> new CartItemsDTO(cartItem))
                                .collect(Collectors.toSet());
    }

}
