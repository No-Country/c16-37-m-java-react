package org.ecommerce.models.dto;

import lombok.Getter;
import lombok.Setter;
import org.ecommerce.models.entity.Cart;
import org.ecommerce.models.entity.CartItems;
import org.ecommerce.models.entity.Product;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

@Getter @Setter
public class CartItemsDTO {

    private long id;
    private double discount;
    private double product_price;
    private int quantity;
    private Cart cart;
    private Set<ProductDTO> productSet;

    public CartItemsDTO(CartItems cartItems) {
        this.id = cartItems.getId();
        this.discount = cartItems.getDiscount();
        this.product_price = cartItems.getProduct_price();
        this.quantity = cartItems.getQuantity();
        this.cart = cartItems.getCart();
        this.productSet = cartItems.getProductSet()
                                    .stream()
                                    .map(product -> new ProductDTO(product))
                                    .collect(Collectors.toSet());
    }
}
