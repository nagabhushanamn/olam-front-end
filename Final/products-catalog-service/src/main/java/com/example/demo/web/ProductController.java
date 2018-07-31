package com.example.demo.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Product;
import com.example.demo.service.ProductService;

/*
 * 
 *  REST API
 *  
 *  /api/products
 * 
 */

@CrossOrigin(origins="*")
@RestController
public class ProductController {

	@Autowired
	private ProductService productService;

	@RequestMapping(value = "/api/products", produces = "application/json")
	public List<Product> get() {
		return this.productService.getAllProducts();
	}

}
