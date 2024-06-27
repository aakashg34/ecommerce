package com.example.ecommerce.repository;

import com.example.ecommerce.models.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
    // Custom query methods (if any)
}
