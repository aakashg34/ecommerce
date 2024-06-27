package com.example.ecommerce.repository;

import com.example.ecommerce.models.Carts;
import com.example.ecommerce.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CartRepository extends JpaRepository<Carts, Long> {
        Optional<Carts> findByUser(User user);

        Optional<Carts> findByUserId(Integer userId);

}

