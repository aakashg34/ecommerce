package com.example.ecommerce.repository;

//import com.example.ecommerce.models.Product;

import com.example.ecommerce.models.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

//@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Products, Long> {
}
