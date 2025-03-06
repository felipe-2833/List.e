package br.com.fiap.Liste.model;

import java.util.Random;

public class Anime {
    private Long id;
    private String name;
    private String icon;
    private Double nota;
    private String descricao;
    private String opiniao;

    

    public Anime(Long id, String name, String icon, Double nota, String descricao, String opiniao) {
        this.id = Math.abs(new Random().nextLong());
        this.name = name;
        this.icon = icon;
        this.nota = nota;
        this.descricao = descricao;
        this.opiniao = opiniao;
    }



    public Long getId() {
        return id;
    }



    public String getName() {
        return name;
    }



    public String getIcon() {
        return icon;
    }



    public Double getNota() {
        return nota;
    }



    public String getDescricao() {
        return descricao;
    }



    public String getOpiniao() {
        return opiniao;
    }
}
