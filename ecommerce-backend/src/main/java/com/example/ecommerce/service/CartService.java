package com.example.ecommerce.service;

import com.example.ecommerce.models.Carts;
import com.example.ecommerce.models.Products;
import com.example.ecommerce.models.User;
import com.example.ecommerce.repository.CartRepository;
import com.example.ecommerce.repository.ProductRepository;
import com.example.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public class CartService {
        @Autowired
        private CartRepository cartRepository;

        @Autowired
        private ProductRepository productRepository;

        @Autowired
        private UserRepository userRepository;

//        public Carts addToCart(Products product) {
//            Carts cart = cartRepository.findByUserId(1L); // Assuming user ID is 1 for now
//            if (cart == null) {
//                cart = new Carts();
//                cart.setUserId(1L);
//            }
//            cart.addProduct(product);
//            return cartRepository.save(cart);
//        }

    public Optional<Carts> getCartByUserId(Integer userId) {
        return cartRepository.findByUserId(userId);
    }

    public Carts addProductToCart(Integer userId, Long productId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Products product = productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));

        Carts cart = cartRepository.findByUserId(userId).orElse(new Carts(user));
        cart.addProduct(product);
        return cartRepository.save(cart);
    }

    public Set<Products> getProductsInCart(Integer userId) {
        Carts cart = cartRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Cart not found for user id: " + userId));
        return cart.getProducts();
    }

    public Carts removeProductFromCart(Integer userId, Long productId) {
        Carts cart = cartRepository.findByUserId(userId).orElseThrow(() -> new RuntimeException("Cart not found for user id: " + userId));
        Products product = productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));

        cart.removeProduct(product);
        return cartRepository.save(cart);
    }
        // Other cart-related methods...
    }


