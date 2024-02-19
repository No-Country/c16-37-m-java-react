package org.ecommerce.models.producto.dto;

import org.ecommerce.models.producto.entity.Producto;

public record RespuestaListadoProductosDTO(
        Long id,
        String productName,
        String description,
        Double price,
        Double discount,
        Integer quantity,
        String image,
        Double specialPrice,
        String category

) {
    public RespuestaListadoProductosDTO(Producto producto) {
        this(
                producto.getProductId(),
                producto.getProductName(),
                producto.getDescription(),
                producto.getPrice(),
                producto.getDiscount(),
                producto.getQuantity(),
                producto.getImage(),
                producto.getSpecialPrice(),
                producto.getCategory().getCategoryName()
        );
    }
}
