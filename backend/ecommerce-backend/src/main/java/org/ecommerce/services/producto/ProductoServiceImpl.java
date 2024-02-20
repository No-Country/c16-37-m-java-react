package org.ecommerce.services.producto;

import org.ecommerce.models.categorie.dto.CreateCategoryDTO;
import org.ecommerce.models.categorie.entity.Category;
import org.ecommerce.models.producto.dto.RegistrarProductoDTO;
import org.ecommerce.models.producto.dto.UpdateProductDTO;
import org.ecommerce.models.producto.entity.Producto;
import org.ecommerce.repositories.ProductoRepository;
import org.ecommerce.services.category.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoServiceImpl implements ProductoService {
    @Autowired
    private ProductoRepository productoRepository;
    @Autowired
    private CategoryService categoryService;

    @Override
    public Producto saveProduct(RegistrarProductoDTO registrarProductoDTO) {
        Producto producto = new Producto(registrarProductoDTO);
        Category category = categoryService.findCategoryByName(String.valueOf(registrarProductoDTO.category()));
        if (category == null) {
            CreateCategoryDTO categoryDTO = new CreateCategoryDTO(registrarProductoDTO.category());
            category = new Category(categoryDTO);
            categoryService.saveCategory(category);
        }
        category.getProductos().add(producto);
        producto.setCategory(category);
        productoRepository.save(producto);
        return producto;
    }

    @Override
    public List<Producto> productosList() {
        return productoRepository.findAll();
    }

    @Override
    public Producto updateProduct(UpdateProductDTO updateProductDTO) {
        Producto producto = productoRepository.getReferenceById(updateProductDTO.id());

        if (updateProductDTO.category() != null) {
            Category category = categoryService.findCategoryByName(updateProductDTO.category());
            if (category == null) {
                category = new Category();
                category.setCategoryName(updateProductDTO.category());
                categoryService.saveCategory(category);
            }
            producto.setCategory(category);
            category.getProductos().add(producto);

        }
        producto.updateProduct(updateProductDTO);
        return producto;
    }

    @Override
    public Producto getProductById(Long id) {
        return productoRepository.getReferenceById(id);
    }

    @Override
    public Page<Producto> activeProductList(Pageable pageable) {
        return productoRepository.findByActivoTrue(pageable);
    }

    @Override
    public void desableProduct(Long id) {
        Producto producto = productoRepository.getReferenceById(id);
        producto.disableProduct();
    }

    @Override
    public void enableProduct(Long id) {
        Producto producto = productoRepository.getReferenceById(id);
        producto.enableProduct();
    }
}
