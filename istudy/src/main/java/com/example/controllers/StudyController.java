package com.example.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api") // Adiciona um prefixo para todos os endpoints
public class StudyController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello SpringBoot";
    }
}
