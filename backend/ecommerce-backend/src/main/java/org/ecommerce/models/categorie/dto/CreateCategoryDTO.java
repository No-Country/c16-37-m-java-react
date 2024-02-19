package org.ecommerce.models.categorie.dto;

import jakarta.validation.constraints.NotBlank;

public record CreateCategoryDTO(@NotBlank String category) {
    public CreateCategoryDTO(String category) {
        this.category = category;
    }
}
