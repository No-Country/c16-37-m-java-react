package org.ecommerce.repositories;

import org.ecommerce.models.producto.entity.Producto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductoRepository extends JpaRepository<Producto, Long> {
    Page<Producto> findByActivoTrue(Pageable pageable);
    Page<Producto> findByProductNameContains(String productName, Pageable pageable);
}
