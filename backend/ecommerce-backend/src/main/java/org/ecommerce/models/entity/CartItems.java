package org.ecommerce.models.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter @Setter
@Table(name = "cart_items")
public class CartItems {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private double discount;
    private double product_price;
    private int quantity;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Cart cart;
    @OneToMany(mappedBy = "product", fetch = FetchType.EAGER)
    private Set<Product> productSet = new HashSet<>();

    public CartItems() {
    }

    public CartItems(double discount, double product_price, int quantity, Cart cart, Set<Product> productSet) {
        this.discount = discount;
        this.product_price = product_price;
        this.quantity = quantity;
        this.cart = cart;
        this.productSet = productSet;
    }
}
