package com.example.entities;

import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.*;

@Entity
@Table(name = "materials")
@Getter
@Setter
public class Material {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Enumerated(EnumType.STRING)
    private MaterialType type;

    @ManyToOne
    @JoinColumn(name = "discipline_id")
    private Discipline discipline;

    public Material() {}

    public Material(String title, MaterialType type, Discipline discipline) {
        this.title = title;
        this.type = type;
        this.discipline = discipline;
    }
}
