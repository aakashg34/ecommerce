package com.example.ecommerce.controller;


import com.example.ecommerce.models.User;
import com.example.ecommerce.repository.UserRepository;
import com.example.ecommerce.service.UserService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @PostMapping("/saveUser")
    public String saveUser(@RequestBody User user) {
    userRepository.save(user);
    return "User Saved";
    }

    @GetMapping("/getAllUsers")
    public List<User> getAll(){
        return userRepository.findAll();
    }

    @DeleteMapping("/{userId}/clear-cart")
    public ResponseEntity<?> clearCart(@PathVariable Integer userId) {
        try {
            userService.clearCart(userId);
            return ResponseEntity.ok().build();
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
