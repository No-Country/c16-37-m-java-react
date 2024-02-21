package org.ecommerce.repositories;

import org.ecommerce.models.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Long> {

    List<Cart> findByUserId(String id);
    List<Cart> findByUserEmail(String email);
}
