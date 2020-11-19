package com.vendaverde.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.vendaverde.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{	
	public List<Usuario> findAllByNomeContainingIgnoreCase(String nome);
	//puxar pelo username, no find o usuario é o atributo da class usuario
	public Optional<Usuario> findByUsuario(String usuario);
	
}
