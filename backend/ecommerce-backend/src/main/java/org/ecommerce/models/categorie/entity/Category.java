package org.ecommerce.models.categorie.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.ecommerce.models.categorie.dto.CreateCategoryDTO;
import org.ecommerce.models.producto.entity.Producto;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "categorias")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private Long categoryId;
    @Column(name = "category_name")
    private String categoryName;
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Producto> productos = new ArrayList<>();

    public Category(CreateCategoryDTO createCategoryDTO){
        this.categoryName = createCategoryDTO.category();
    }

    public void updateCategory(String category){
        if(category != null){
            this.categoryName = category;
        }
    }
}
