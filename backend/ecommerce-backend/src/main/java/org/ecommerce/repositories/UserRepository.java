package org.ecommerce.repositories;

import org.ecommerce.models.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {

}
