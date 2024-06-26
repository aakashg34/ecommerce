package com.example.ecommerce.service;


//import com.example.ecommerce.models.Product;
import com.example.ecommerce.models.Products;
import com.example.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Products> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Products> getProductsByCategoryName(String category){
        return (List<Products>) productRepository.findByCategory(category);
    }

    public List<Products> getProductsByCategories(List<String> categories) {
        return productRepository.findByCategoryIn(categories);
    }

    public List<String> getCategories() {
        return productRepository.findDistinctCategories();
    }

}
