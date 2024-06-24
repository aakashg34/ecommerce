package com.example.ecommerce.controller;


import com.example.ecommerce.models.User;
import com.example.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/saveUser")
    public String saveUser(@RequestBody User user) {
    userRepository.save(user);
    return "User Saved";
    }

    @GetMapping("/getAllUsers")
    public List<User> getAll(){
        return userRepository.findAll();
    }
}
