package org.ecommerce.models.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String description;
    private double discount;
    private String image;
    private double price;
    private String productName;
    private int quantity;
    private double specialPrice;
    @ManyToOne
    @JoinColumn(name="category_id")
    private Category category;

    public Product() {
    }

    public Product(String description, double discount, String image, double price, String productName, int quantity, double specialPrice, Category category) {
        this.description = description;
        this.discount = discount;
        this.image = image;
        this.price = price;
        this.productName = productName;
        this.quantity = quantity;
        this.specialPrice = specialPrice;
        this.category = category;
    }
}
