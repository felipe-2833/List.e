package br.com.fiap.Liste.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.fiap.Liste.model.Anime;

public interface AnimeRepository extends JpaRepository<Anime, Long> {

}