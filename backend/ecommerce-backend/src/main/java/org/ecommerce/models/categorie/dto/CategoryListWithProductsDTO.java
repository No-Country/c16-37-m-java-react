package org.ecommerce.models.categorie.dto;

import org.ecommerce.models.producto.dto.RespuestaListadoProductosDTO;

import java.util.List;

public record CategoryListWithProductsDTO(
        Long id,
        String categoryName,
        List<RespuestaListadoProductosDTO> productos
) {
}
