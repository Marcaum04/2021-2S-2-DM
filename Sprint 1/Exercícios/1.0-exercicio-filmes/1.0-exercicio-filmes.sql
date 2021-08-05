--Este é um comentário
/*
Comentário em várias linhas mó paz
Vida boa sou programador
*/

--atalho
--escrever ctrl + k depois ctrl +  c

--COMANDOS DDL

--CREATE

CREATE DATABASE CATALOGO;
GO

USE CATALOGO;
GO

CREATE TABLE GENERO(
	idGenero TINYINT PRIMARY KEY IDENTITY(1,1),
	nomeGenero VARCHAR(30)
);
GO

CREATE TABLE FILME(
	idFilme SMALLINT PRIMARY KEY IDENTITY(1,1),
	idGenero TINYINT FOREIGN KEY REFERENCES GENERO(idGenero),
	tituloFilme VARCHAR(70)
);
GO

--ALT + F1 ANALISA TABELA

INSERT INTO GENERO (nomeGenero)
VALUES ('AÇÃO'), ('ROMANCE');

INSERT INTO FILME (idGenero, tituloFilme)
VALUES  (1, 'RAMBO'), (1, 'VINGADORES'),
		(2, 'GHOST'), (2, 'DIÁRIO DE UMA PAIXÃO')
GO

SELECT * FROM GENERO
SELECT * FROM FILME
GO

--DELETE FROM GENERO
--WHERE idGenero IN (3,4)
--GO