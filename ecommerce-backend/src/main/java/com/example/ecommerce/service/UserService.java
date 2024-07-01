package com.example.ecommerce.service;


import com.example.ecommerce.models.User;
import com.example.ecommerce.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public void clearCart(Integer userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            // Clear the cart (assuming cart is a collection in User entity)
            user.getCarts().clear();
            userRepository.save(user);
        } else {
            throw new EntityNotFoundException("User not found with id: " + userId);
        }
    }
}
