package br.com.fiap.Liste.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import br.com.fiap.Liste.model.Anime;

public interface AnimeRepository extends JpaRepository<Anime, Long>, JpaSpecificationExecutor<Anime> {

}