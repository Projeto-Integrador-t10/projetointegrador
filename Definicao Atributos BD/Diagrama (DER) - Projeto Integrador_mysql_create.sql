CREATE TABLE `Usuario` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`senha` varchar(255) NOT NULL,
	`tipo` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Categoria` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	`ativo` BOOLEAN NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Produto` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`nome` varchar(255) NOT NULL,
	`preco` DECIMAL(5,2) NOT NULL,
	`quantidade` INT NOT NULL,
	`estoque` BOOLEAN NOT NULL,
	`doacao` varchar(255) NOT NULL,
	`categoria_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `Produto` ADD CONSTRAINT `Produto_fk0` FOREIGN KEY (`categoria_id`) REFERENCES `Categoria`(`id`);

