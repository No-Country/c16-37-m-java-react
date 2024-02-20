package org.ecommerce.services.category;

import org.ecommerce.models.categorie.entity.Category;

import java.util.List;

public interface CategoryService {
    void saveCategory(Category category);
    Category findCategoryByName(String categoryName);
    List<Category> AllCategories();
}
