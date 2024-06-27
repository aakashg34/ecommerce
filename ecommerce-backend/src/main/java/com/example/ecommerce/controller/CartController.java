package com.example.ecommerce.controller;

import com.example.ecommerce.models.Carts;
import com.example.ecommerce.models.Products;
import com.example.ecommerce.service.CartService;
import com.example.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;


@RestController
@RequestMapping("/api/cart")
@CrossOrigin("*")
public class CartController {
        @Autowired
        private CartService cartService;

        @Autowired
        private ProductService productService;

        @PostMapping("/{userId}/add/{productId}")
        public ResponseEntity<Carts> addProductToCart(@PathVariable Integer userId, @PathVariable Long productId) {
            Carts cart = cartService.addProductToCart(userId, productId);
            return ResponseEntity.ok(cart);
        }

        @GetMapping("/{userId}")
        public Set<Products> getCartProducts(@PathVariable Integer userId) {
            return cartService.getProductsInCart(userId);
        }


    @DeleteMapping("/{userId}/remove/{productId}")
    public ResponseEntity<Carts> removeProductFromCart(@PathVariable Integer userId, @PathVariable Long productId) {
        Carts cart = cartService.removeProductFromCart(userId, productId);
        return ResponseEntity.ok(cart);
    }


    // Other cart-related endpoints...
    }


