package com.example.ecommerce.models;

public class LoginResponse {
    private String message;
    private Long userId;

    private String address;

    public LoginResponse(String message, Long userId, String address) {
        this.message = message;
        this.userId = userId;
        this.address = address;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}
