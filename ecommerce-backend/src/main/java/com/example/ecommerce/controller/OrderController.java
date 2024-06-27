package com.example.ecommerce.controller;

import com.example.ecommerce.models.Order;
import com.example.ecommerce.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping("/placeOrder")
    public ResponseEntity<Order> placeOrder(@RequestBody OrderRequest orderRequest) {
        Order order = orderService.placeOrder(orderRequest.getUserId(), orderRequest.getTotalOrderAmount(), orderRequest.getAddress());
        return ResponseEntity.ok(order);
    }

    public static class OrderRequest {
        private Long userId;
        private BigDecimal totalOrderAmount;
        private String address;

        // Getters and setters
        public Long getUserId() {
            return userId;
        }

        public void setUserId(Long userId) {
            this.userId = userId;
        }

        public BigDecimal getTotalOrderAmount() {
            return totalOrderAmount;
        }

        public void setTotalOrderAmount(BigDecimal totalOrderAmount) {
            this.totalOrderAmount = totalOrderAmount;
        }

        public String getAddress() {
            return address;
        }

        public void setAddress(String address) {
            this.address = address;
        }
    }
}
