package org.ecommerce.models.producto.dto;

public record UpdateProductDTO(long id, String productName, String description, Double price, Double discount,
                               Integer quantity, String image, Double specialPrice, String category) {
}
