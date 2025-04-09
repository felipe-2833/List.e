package br.com.fiap.Liste.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
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
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/animes")
public class AnimeController {

    private final Logger log = LoggerFactory.getLogger(getClass());

    @Autowired
    private AnimeRepository repository;

    @GetMapping
    @Cacheable("animes")
    @Operation(description = "Listar todos os animes", tags = "animes", summary = "Lista de animes")
    public List<Anime> index() {
        log.info("Buscando todos os animes");
        return repository.findAll();
    }

    @PostMapping
    @CacheEvict(value = "animes", allEntries = true)
    @ResponseStatus(HttpStatus.CREATED)
    @Operation(responses = {
            @ApiResponse(responseCode = "400", description = "Falha na validação")
    }, tags = "animes", summary = "Adicionar anime", description = "Adicionar animes")
    public Anime create(@RequestBody @Valid Anime anime) {
        log.info("Cadastrando animes " + anime.getName());
        return repository.save(anime);
    }

    @GetMapping("/{id}")
    @Operation(description = "Listar anime pelo id", tags = "animes", summary = "Listar de anime")
    public Anime get(@PathVariable Long id) {
        log.info("Buscando anime " + id);
        return getAnime(id);
    }

    @DeleteMapping("/{id}")
    @Operation(description = "Deletar anime pelo id", tags = "animes", summary = "Deletar anime")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void destroy(@PathVariable Long id) {
        log.info("Apagando anime " + id);
        repository.delete(getAnime(id));
    }

    @PutMapping("/{id}")
    @Operation(description = "Update anime pelo id", tags = "animes", summary = "Update anime")
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
