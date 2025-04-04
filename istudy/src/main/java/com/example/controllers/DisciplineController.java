package com.example.controllers;

import com.example.entities.Discipline;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DisciplineController {

    @GetMapping("/disciplines")
    public Discipline getDiscipline() {
        return new Discipline("Desenvolvimento Web", 10, 8, 2, 2.0);
    }

}
