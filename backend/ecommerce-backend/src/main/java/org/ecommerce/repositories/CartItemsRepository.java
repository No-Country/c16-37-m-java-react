package org.ecommerce.repositories;

import org.ecommerce.models.entity.Cart;
import org.ecommerce.models.entity.CartItems;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartItemsRepository extends JpaRepository<CartItems, Long> {
        List<CartItems> findAll();
        void deleteById(Long id);
        void deleteByCartId(Long cartId);
}
