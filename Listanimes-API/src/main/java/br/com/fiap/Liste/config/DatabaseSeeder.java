package br.com.fiap.Liste.config;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import br.com.fiap.Liste.model.Anime;
import br.com.fiap.Liste.model.User;
import br.com.fiap.Liste.model.UserRole;
import br.com.fiap.Liste.repository.AnimeRepository;
import br.com.fiap.Liste.repository.UserRepository;
import jakarta.annotation.PostConstruct;

@Component
public class DatabaseSeeder {
    
    @Autowired
    private AnimeRepository animeRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostConstruct
    public void animeSeed() {

        var joao = User.builder()
                        .email("joao@fiap.com.br")
                        .password(passwordEncoder.encode("12345"))
                        .role(UserRole.ADMIN)
                        .build();

        var maria = User.builder()
                        .email("maria@fiap.com.br")
                        .password(passwordEncoder.encode("12345"))
                        .role(UserRole.USER)
                        .build();

        userRepository.saveAll(List.of(joao, maria));

        animeRepository.saveAll(
                List.of(
                        Anime.builder().name("Naruto").nota(9.0).genero("Battle Shounen").completo(true).user(joao).build(),
                        Anime.builder().name("Bleach").nota(7.5).genero("Battle Shounen").completo(true)user(joao).build(),
                        Anime.builder().name("One Piece").nota(9.0).genero("Battle Shounen").completo(true)user(maria).build()));
    
    }

}
