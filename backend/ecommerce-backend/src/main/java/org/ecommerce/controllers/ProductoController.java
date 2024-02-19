package org.ecommerce.controllers;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.ecommerce.models.categorie.dto.CreateCategoryDTO;
import org.ecommerce.models.categorie.entity.Category;
import org.ecommerce.models.producto.dto.UpdateProductDTO;
import org.ecommerce.models.producto.entity.Producto;
import org.ecommerce.models.producto.dto.RegistrarProductoDTO;
import org.ecommerce.models.producto.dto.RespuestaListadoProductosDTO;
import org.ecommerce.services.category.CategoryService;
import org.ecommerce.services.producto.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/producto")
public class ProductoController {
    @Autowired
    private ProductoService productoService;

    @PostMapping
    public ResponseEntity createProduct(@RequestBody @Valid RegistrarProductoDTO productoDTO,
                                        UriComponentsBuilder uriComponentsBuilder) {

        Producto producto = productoService.saveProduct(productoDTO);
        RespuestaListadoProductosDTO respuestaListadoProductosDTO = new RespuestaListadoProductosDTO(producto);
        URI url = uriComponentsBuilder.path("/producto/{id}").buildAndExpand(producto.getProductId()).toUri();
        return ResponseEntity.created(url).body(respuestaListadoProductosDTO);
    }

    @GetMapping
    public ResponseEntity getAllProducts() {
        List<RespuestaListadoProductosDTO> productos = productoService.productosList().stream().map(RespuestaListadoProductosDTO::new).toList();
        return ResponseEntity.ok(productos);
    }

    @GetMapping("/activos")
    public ResponseEntity<Page<RespuestaListadoProductosDTO>> getAllActiveProducts(Pageable pageable) {
        Page<RespuestaListadoProductosDTO> productos = productoService.activeProductList(pageable).map(RespuestaListadoProductosDTO::new);
        return ResponseEntity.ok(productos);
    }

    @GetMapping("/{id}")
    public ResponseEntity getProductDetail(@PathVariable Long id) {
        Producto producto = productoService.getProductById(id);
        RespuestaListadoProductosDTO productDetail = new RespuestaListadoProductosDTO(producto);
        return ResponseEntity.ok(productDetail);
    }

    @PutMapping
    @Transactional
    public ResponseEntity updateOneProduct(@RequestBody UpdateProductDTO updateProductDTO) {
        Producto producto = productoService.updateProduct(updateProductDTO);
        RespuestaListadoProductosDTO product = new RespuestaListadoProductosDTO(producto);
        return ResponseEntity.ok(product);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity logicDeleteProduct(@PathVariable Long id) {
        productoService.desableProduct(id);
        return ResponseEntity.ok("El equipo ha sido desactivado correctamente");
    }

    @PutMapping("/{id}")
    @Transactional
    public ResponseEntity logicActiveProduct(@PathVariable Long id) {
        productoService.enableProduct(id);
        return ResponseEntity.ok("El equipo ha sido activado correctamente");
    }
}
