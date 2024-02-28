package org.ecommerce.models.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.ecommerce.models.producto.entity.Producto;

@Entity
@Getter @Setter
@Table(name = "cart_items")
public class CartItems {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private double discount;
    private double productPrice;
    private int quantity;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Cart cart;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Producto product;

    public CartItems() {
    }

    public CartItems(double discount, double productPrice, int quantity, Cart cart, Producto product) {
        this.discount = discount;
        this.productPrice = productPrice;
        this.quantity = quantity;
        this.cart = cart;
        this.product = product;
    }
}
