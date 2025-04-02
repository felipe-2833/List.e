package br.com.fiap.Liste.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Entity
@Data
public class Anime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "campo obrigatório")
    private String name;

    @NotBlank(message = "campo obrigatório")
    private String icon;

    @DecimalMin(value = "0.0", inclusive = true, message = "O valor deve ser maior ou igual a 0")
    @DecimalMax(value = "10.0", inclusive = true, message = "O valor deve ser menor ou igual a 10")
    private Double nota;

    @NotBlank(message = "campo obrigatório")
    private String descricao;

    @NotBlank(message = "campo obrigatório")
    private String opiniao;

}
