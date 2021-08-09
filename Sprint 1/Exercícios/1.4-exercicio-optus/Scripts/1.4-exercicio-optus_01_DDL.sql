CREATE DATABASE MUSICPLAYER
GO

USE MUSICPLAYER;
GO

CREATE TABLE ARTISTA(
	idArtista INT PRIMARY KEY IDENTITY (1,1),
	nomeArtista VARCHAR(20)
);
GO

CREATE TABLE ESTILO(
	idEstilo TINYINT PRIMARY KEY IDENTITY (1,1),
	nomeEstilo VARCHAR(20)
);
GO

CREATE TABLE PLATAFORMA(
	idPlataforma TINYINT PRIMARY KEY IDENTITY (1,1),
	nomePlataforma VARCHAR(20)
);
GO

CREATE TABLE USUARIO(
	idUsuario INT PRIMARY KEY IDENTITY (1,1),
	idPlataforma TINYINT FOREIGN KEY REFERENCES PLATAFORMA(idPlataforma),
	nomeUsuario VARCHAR(20),
	email VARCHAR(50),
	senha VARCHAR(9),
	permissao BIT
);
GO

CREATE TABLE ALBUM(
	idAlbum INT PRIMARY KEY IDENTITY (1,1),
	idArtista INT FOREIGN KEY REFERENCES ARTISTA(idArtista),
	idEstilo TINYINT FOREIGN KEY REFERENCES ESTILO(idEstilo),
	idPlataforma TINYINT FOREIGN KEY REFERENCES PLATAFORMA(idPlataforma),
	titulo VARCHAR(20),
	dataLanc DATE,
	tempo VARCHAR(10),
	ativo BIT
);
GO