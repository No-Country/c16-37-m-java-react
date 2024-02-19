package org.ecommerce.models.categorie.dto;

import org.ecommerce.models.categorie.entity.Category;

public record CategoryListDTO(Long id, String categoryName) {
    public CategoryListDTO(Category category) {
        this(
                category.getCategoryId(),
                category.getCategoryName()
        );
    }
}
