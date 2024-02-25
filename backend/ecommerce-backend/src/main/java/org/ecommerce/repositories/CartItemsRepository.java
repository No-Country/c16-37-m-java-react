package org.ecommerce.repositories;

import org.ecommerce.models.entity.CartItems;
import org.ecommerce.models.producto.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartItemsRepository extends JpaRepository<CartItems, Long> {
    List<CartItems> findByUserName(String userName);
    List<CartItems> findByClientAndEmail(String email);
    List<Producto> findProductoById (Long id);
    void deleteByUserId(Long id);
}
