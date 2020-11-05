package com.vendaverde.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Categoria {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	@Size(min = 1, max = 150)
	private String nome;
	
	@NotNull
	private boolean ativo;
	
	@NotNull
	@Size(min = 1, max = 200)
	private String produtor;
	
	public long getId() {return id;}
	public void setId(long id) {this.id = id;}
	public String getNome() {return nome;}
	public void setNome(String nome) {this.nome = nome;}
	public boolean isAtivo() {return ativo;}
	public void setAtivo(boolean ativo) {this.ativo = ativo;}
	public String getProdutor() {return produtor;}
	public void setProdutor(String porduto) {this.produtor = produtor;}	
	
}
