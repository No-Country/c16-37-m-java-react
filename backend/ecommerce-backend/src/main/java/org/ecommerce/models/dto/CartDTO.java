package org.ecommerce.models.dto;

import lombok.Getter;
import lombok.Setter;
import org.ecommerce.models.entity.Cart;

@Getter @Setter
public class CartDTO {

    private long id;
    private double totalPrice;
    private UserDto user;


    private CartDTO(Cart cart){
        this.id = cart.getId();
        this.totalPrice = cart.getTotalPrice();
        this.user = new UserDto(cart.getUser());

    }
}
