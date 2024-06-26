package com.example.ecommerce.controller;


//import com.example.ecommerce.models.Product;
import com.example.ecommerce.models.Products;
import com.example.ecommerce.repository.ProductRepository;
import com.example.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/products")
    public List<Products> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping("/products")
    public String saveProduct(@RequestBody Products product) {
       productRepository.save(product);
       return "Product Saved";
    }

    @GetMapping("/products/{category}")
    public List<Products> getProductsFromCategoryName(@PathVariable String category) {
       return productRepository.findByCategory(category);
    }

    @GetMapping("/categories")
    public List<Products> getProductsByCategories(@RequestParam List<String> categories) {
        return productService.getProductsByCategories(categories);
    }

    @GetMapping("/categories-list")
    public List<String> getCategories() {
        return productService.getCategories();
    }

}
