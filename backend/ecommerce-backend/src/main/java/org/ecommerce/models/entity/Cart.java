package org.ecommerce.models.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Setter
@Getter
@Entity
@Table( name = "cart")
public class Cart {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private long id;
    private double totalPrice;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User userId;
    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL)
    private Set<CartItems> cartItemsSet;

    public Cart() {
    }

    private Cart(double totalPrice, User userId) {
        this.totalPrice = totalPrice;
        this.userId = userId;
    }
}
