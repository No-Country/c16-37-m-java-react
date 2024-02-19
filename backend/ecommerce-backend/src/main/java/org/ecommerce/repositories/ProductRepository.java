package org.ecommerce.repositories;

import org.ecommerce.models.producto.dto.RespuestaListadoProductosDTO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<RespuestaListadoProductosDTO, Long> {

}
