package org.ecommerce.services.producto;

import org.ecommerce.models.producto.dto.RegistrarProductoDTO;
import org.ecommerce.models.producto.dto.UpdateProductDTO;
import org.ecommerce.models.producto.entity.Producto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProductoService {
    Producto saveProduct(RegistrarProductoDTO registrarProductoDTO);

    List<Producto> productosList();

    Producto updateProduct(UpdateProductDTO updateProductDTO);

    Producto getProductById(Long id);

    Page<Producto> activeProductList(Pageable pageable);

    void desableProduct(Long id);

    void enableProduct(Long id);
    Page<Producto> getProductsByName(String productName, Pageable pageable);
}
