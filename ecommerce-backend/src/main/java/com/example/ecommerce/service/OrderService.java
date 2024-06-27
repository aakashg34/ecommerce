package com.example.ecommerce.service;

import com.example.ecommerce.models.Order;
import com.example.ecommerce.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public Order placeOrder(Long userId, BigDecimal totalOrderAmount, String address) {
        Order order = new Order(userId, totalOrderAmount, address, LocalDateTime.now());
        return orderRepository.save(order);
    }
}
