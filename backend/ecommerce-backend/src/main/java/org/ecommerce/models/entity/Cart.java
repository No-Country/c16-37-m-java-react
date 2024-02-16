package org.ecommerce.models.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Setter @Getter
@Entity
@NoArgsConstructor
@Table( name = "cart")
public class Cart {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private long id;
    private double totalPrice;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL)
    private Set<CartItems> cartItemsSet;

    private Cart(double totalPrice, User user) {
        this.totalPrice = totalPrice;
        this.user = user;
    }
}
