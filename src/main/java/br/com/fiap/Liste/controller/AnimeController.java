package br.com.fiap.Liste.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.fiap.Liste.model.Anime;

public class AnimeController {
    private List<Anime> repository = new ArrayList<>();

    @GetMapping("/animes")
    public List<Anime> index(){
        return repository;
    }

    @PostMapping("/animes")
    public ResponseEntity<Anime> create(@RequestBody Anime anime){
        System.out.println("Cadastrando categoria: " + anime.getName());
        repository.add(anime); 
        return ResponseEntity.status(201).body(anime);
    }

    @GetMapping("/categories/{id}")
    public ResponseEntity<Anime> get(@PathVariable Long id){
        var Anime = repository.stream().filter(c -> c.getId().equals(id)).findFirst();

        if(Anime.isEmpty()){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(Anime.get()); 
    }

    
}
