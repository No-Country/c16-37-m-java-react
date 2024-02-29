package org.ecommerce.models.producto.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.*;
import org.ecommerce.models.categorie.dto.CreateCategoryDTO;
import org.ecommerce.models.producto.Genero;

public record RegistrarProductoDTO(
        @NotBlank
        String productName,
        @NotBlank
        String description,
        @NotNull
        @Positive
        Double price,
        @NotNull
        @DecimalMin("0.0")
        @DecimalMax("1.0")
        Double discount,
        @NotNull
        @PositiveOrZero
        Integer quantity,
        @NotBlank
        String image,
        @NotNull
        @Positive
        Double specialPrice,
        @NotBlank
        String category,
        @NotNull
        Genero gender
) {
}
