package com.example.ecommerce.repository;

//import com.example.ecommerce.models.Product;

import com.example.ecommerce.models.Products;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

//@CrossOrigin("http://localhost:4200")
public interface ProductRepository extends JpaRepository<Products, Long> {

    List<Products> findByCategory(String category);

    List<Products> findByCategoryIn(List<String> categories);

    @Query("SELECT DISTINCT category FROM Products")
    List<String> findDistinctCategories();
}
