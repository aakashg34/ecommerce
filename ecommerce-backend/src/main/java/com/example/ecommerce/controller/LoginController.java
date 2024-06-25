package com.example.ecommerce.controller;

import com.example.ecommerce.models.User;
import com.example.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public String login(@RequestBody User loginUser) {
        User user = userRepository.findByUsername(loginUser.getUsername());
        if( user != null && user.getPassword().equals(loginUser.getPassword())) {
            return "Login Successful";
        }else {
            return "Invalid username or password";
        }
    }
}
