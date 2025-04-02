package br.com.fiap.Liste.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import br.com.fiap.Liste.model.Anime;
import br.com.fiap.Liste.repository.AnimeRepository;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/animes")
public class AnimeController {

    private final Logger log = LoggerFactory.getLogger(getClass());

    @Autowired
    private AnimeRepository repository;

    @GetMapping
    public List<Anime> index() {
        log.info("Buscando todos os animes");
        return repository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Anime create(@RequestBody @Valid Anime anime) {
        log.info("Cadastrando animes " + anime.getName());
        return repository.save(anime);
    }

    @GetMapping("/{id}")
    public Anime get(@PathVariable Long id) {
        log.info("Buscando anime " + id);
        return getAnime(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void destroy(@PathVariable Long id) {
        log.info("Apagando anime " + id);
        repository.delete(getAnime(id));
    }

    @PutMapping("/{id}")
    public Anime update(@PathVariable Long id, @RequestBody @Valid Anime anime) {
        log.info("Atualizando ifos anime " + id + " " + anime);
        getAnime(id);
        anime.setId(id);
        return repository.save(anime);
    }

    private Anime getAnime(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Anime não encontrado na lista"));
    }

}
