package org.ecommerce.models.producto.dto;

import org.ecommerce.models.producto.Genero;

public record UpdateProductDTO(long id, String productName, String description, Double price, Double discount,
                               Integer quantity, String image, Double specialPrice, String category, Genero gender) {
}
