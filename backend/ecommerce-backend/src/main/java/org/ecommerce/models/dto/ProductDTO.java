package org.ecommerce.models.dto;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import org.ecommerce.models.entity.Product;

public class ProductDTO {

    private long id;
    private String description;
    private double discount;
    private String image;
    private double price;
    private String productName;
    private int quantity;
    private double specialPrice;

    private Category category;

    public ProductDTO(Product product) {

        this.id = product.getId();
        this.description = product.getDescription();
        this.discount = product.getDiscount();
        this.image = product.getImage();
        this.price = product.getPrice();
        this.productName = product.getProductName();
        this.quantity = product.getQuantity();
        this.specialPrice = product.getSpecialPrice();
        this.category = product.getCategory();
    }
}
