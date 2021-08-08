CREATE DATABASE CATALOGO;
GO

USE CATALOGO;
GO

CREATE TABLE GENERO(
	idGenero TINYINT PRIMARY KEY IDENTITY(1,1),
	nomeGenero VARCHAR(20)
);
GO

CREATE TABLE FILME(
	idFilme SMALLINT PRIMARY KEY IDENTITY(1,1),
	idGenero TINYINT FOREIGN KEY REFERENCES GENERO(idGenero),
	tituloFilme VARCHAR(70) 
);
GO