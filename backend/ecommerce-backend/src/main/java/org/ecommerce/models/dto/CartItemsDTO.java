package org.ecommerce.models.dto;

import lombok.Getter;
import lombok.Setter;
import org.ecommerce.models.entity.CartItems;

import org.ecommerce.models.producto.entity.Producto;

@Getter @Setter
public class CartItemsDTO {

    private long id;
    private double discount;
    private double productPrice;
    private int quantity;
    private Producto product;

    public CartItemsDTO(CartItems cartItems) {
        this.id = cartItems.getId();
        this.discount = cartItems.getDiscount();
        this.productPrice = cartItems.getProductPrice();
        this.quantity = cartItems.getQuantity();
        this.product = cartItems.getProduct();
    }
}
