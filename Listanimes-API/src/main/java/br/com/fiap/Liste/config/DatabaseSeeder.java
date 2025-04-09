package br.com.fiap.Liste.config;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.fiap.Liste.model.Anime;
import br.com.fiap.Liste.repository.AnimeRepository;
import jakarta.annotation.PostConstruct;

@Component
public class DatabaseSeeder {
    
    @Autowired
    private AnimeRepository animeRepository;

    @PostConstruct
    public void animeSeed() {
        animeRepository.saveAll(
                List.of(
                        Anime.builder().name("Naruto").nota(9.0).genero("Battle Shounen").completo(true).build(),
                        Anime.builder().name("Bleach").nota(7.5).genero("Battle Shounen").completo(true).build(),
                        Anime.builder().name("One Piece").nota(9.0).genero("Battle Shounen").completo(true).build()));
    }
}
