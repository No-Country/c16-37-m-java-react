package org.ecommerce.controllers;

import org.ecommerce.models.categorie.dto.CategoryListDTO;
import org.ecommerce.models.categorie.dto.CategoryListWithProductsDTO;
import org.ecommerce.models.categorie.entity.Category;
import org.ecommerce.models.producto.dto.RespuestaListadoProductosDTO;
import org.ecommerce.services.category.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/withProducts")
    public ResponseEntity categoryList() {

        List<Category> categorias = categoryService.AllCategories();
        List<CategoryListWithProductsDTO> categoryListDTO = categorias.stream().map(category -> {
                    List<RespuestaListadoProductosDTO> productosDTO = category.getProductos().stream()
                            .map(product -> new RespuestaListadoProductosDTO(product))
                            .collect(Collectors.toList());
                    return new CategoryListWithProductsDTO(category.getCategoryId(), category.getCategoryName(), productosDTO);
                })
                .collect(Collectors.toList());
        return ResponseEntity.ok(categoryListDTO);
    }

    @GetMapping
    public ResponseEntity categoryListNoProducts() {
        List<CategoryListDTO> categorias = categoryService.AllCategories().stream().map(CategoryListDTO::new).toList();
        return ResponseEntity.ok(categorias);
    }
}
