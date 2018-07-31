package com.example.demo;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;

@SpringBootApplication
public class ProductsCatalogServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProductsCatalogServiceApplication.class, args);
	}

//	@Bean
//	public CommandLineRunner test(ProductRepository productRepository) {
//		return args -> {
//			List<Product> products = productRepository.findAll();
//			products.forEach(item -> {
//				System.out.println(item);
//			});
//		};
//	}

}
