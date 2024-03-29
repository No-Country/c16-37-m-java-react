package org.ecommerce.models.producto.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.ecommerce.models.categorie.entity.Category;
import org.ecommerce.models.producto.Genero;
import org.ecommerce.models.entity.CartItems;
import org.ecommerce.models.producto.dto.RegistrarProductoDTO;
import org.ecommerce.models.producto.dto.UpdateProductDTO;

import java.util.HashSet;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Long productId;
    @Column(name = "product_name")
    private String productName;
    private String description;
    private Double price;
    private Double discount;
    private Integer quantity;
    private String image;
    @Column(name = "special_price")
    private Double specialPrice;
    @Enumerated(EnumType.STRING)
    private Genero gender;
    private Boolean activo;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
    @OneToMany(mappedBy = "product")
    private Set<CartItems> cartItemsSet = new HashSet<>();



    public Producto(RegistrarProductoDTO registrarProductoDTO) {
        this.activo = true;
        this.productName = registrarProductoDTO.productName();
        this.description = registrarProductoDTO.description();
        this.price = registrarProductoDTO.price();
        this.discount = registrarProductoDTO.discount();
        this.quantity = registrarProductoDTO.quantity();
        this.image = registrarProductoDTO.image();
        this.specialPrice = registrarProductoDTO.specialPrice();
        this.gender = registrarProductoDTO.gender();
    }

    public void updateProduct(UpdateProductDTO updateProductDTO){
        if(updateProductDTO.productName() != null){
            this.productName = updateProductDTO.productName();
        }
        if(updateProductDTO.description() != null){
            this.description = updateProductDTO.description();
        }
        if(updateProductDTO.price() != null){
            this.price = updateProductDTO.price();
        }
        if(updateProductDTO.discount() != null){
            this.discount = updateProductDTO.discount();
        }
        if(updateProductDTO.quantity() != null){
            this.quantity = updateProductDTO.quantity();
        }
        if(updateProductDTO.image() != null){
            this.image = updateProductDTO.image();
        }
        if(updateProductDTO.specialPrice() != null){
            this.specialPrice = updateProductDTO.specialPrice();
        }
        if(updateProductDTO.gender() != null){
            this.gender = updateProductDTO.gender();
        }
    }

    public void disableProduct(){
        this.activo = false;
    }
    public void enableProduct(){
        this.activo = true;
    }
}
