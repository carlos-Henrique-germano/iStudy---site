package com.example.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "topics")
public class Topic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToOne
    @JoinColumn(name = "discipline_id")
    private Discipline discipline;

    public Topic() {}

    public Topic(String name, Discipline discipline) {
        this.name = name;
        this.discipline = discipline;
    }

}
