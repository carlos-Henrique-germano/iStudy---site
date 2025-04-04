package com.example.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "disciplines")
public class Discipline {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name; // Nome da disciplina
    private Integer questions; // Total de questões respondidas
    private Integer correctAnswers; // Total de acertos
    private Integer wrongAnswers; // Total de erros
    private Double studyTime; // Tempo de estudo (em horas)

    public Discipline() {}

    public Discipline(String name, Integer questions, Integer correctAnswers, Integer wrongAnswers, Double studyTime) {
        this.name = name;
        this.questions = questions;
        this.correctAnswers = correctAnswers;
        this.wrongAnswers = wrongAnswers;
        this.studyTime = studyTime;
    }

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Integer getQuestions() { return questions; }
    public void setQuestions(Integer questions) { this.questions = questions; }

    public Integer getCorrectAnswers() { return correctAnswers; }
    public void setCorrectAnswers(Integer correctAnswers) { this.correctAnswers = correctAnswers; }

    public Integer getWrongAnswers() { return wrongAnswers; }
    public void setWrongAnswers(Integer wrongAnswers) { this.wrongAnswers = wrongAnswers; }

    public Double getStudyTime() { return studyTime; }
    public void setStudyTime(Double studyTime) { this.studyTime = studyTime; }
}
