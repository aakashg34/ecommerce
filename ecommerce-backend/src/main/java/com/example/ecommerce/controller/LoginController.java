package com.example.ecommerce.controller;

import com.example.ecommerce.models.LoginResponse;
import com.example.ecommerce.models.User;
import com.example.ecommerce.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpResponse;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class LoginController {

    @Autowired
    private UserRepository userRepository;

//    @PostMapping("/login")
//    public String login(@RequestBody User loginUser) {
//        User user = userRepository.findByUsername(loginUser.getUsername());
//        if( user != null && user.getPassword().equals(loginUser.getPassword())) {
//
//           return "Login Successful";
//        }else {
//            return "Invalid username or password";
//        }
//    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody User loginUser) {
        User user = userRepository.findByUsername(loginUser.getUsername());
        if (user != null && user.getPassword().equals(loginUser.getPassword())) {
            return new LoginResponse("Login Successful", user.getId(), user.getAddress());
        } else {
            return new LoginResponse("Invalid username or password", null,null);
        }
    }
}
