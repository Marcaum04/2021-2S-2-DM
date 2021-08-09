USE MUSICPLAYER;
GO

INSERT INTO ARTISTA(nomeArtista)
VALUES ('MATUÊ'),('BORGES'),
('TETO'), ('KRAWK'),
('ANDREZIN DO FLUXO'), ('MARCAUM')
GO

INSERT INTO ESTILO(nomeEstilo)
VALUES ('FUNK'), ('TRAP'),
('RAP'), ('ELETRONICA'),
('PAGODE'), ('SAMBA')
GO

INSERT INTO PLATAFORMA(nomePlataforma)
VALUES ('YOUTUBE'), ('SPOTIFY'), ('DEEZER')
GO

INSERT INTO USUARIO(idPlataforma, nomeUsuario, email, senha, permissao)
VALUES (3, 'MARCOS', 'm@email.com', 'ma@132', 1), (1, 'VITÓRIA', 'v@email.com', 'vi@212', 1),
(2, 'MATHEUS', 'm@email.com', 'ma@322', 0), (1, 'ANDRÉ', 'a@email.com', 'an@412', 0),
(3, 'GABRIEL', 'g@email.com', 'ga@532', 0), (2, 'KAYKE', 'k@email.com', 'ka@622', 0),
(1, 'ALFREDO', 'a@email.com', 'al@712', 1), (3, 'RODOLFO', 'r@email.com', 'ro@832', 0),
(3, 'JEFERSON', '@email.com', 'je@932', 0), (2, 'WESLEY', 'w@email.com', 'we@1022', 0)
GO

DELETE FROM USUARIO;
GO

INSERT INTO ALBUM(idArtista, idEstilo, idPlataforma, titulo, dataLanc, tempo, ativo)
VALUES (2, 2, 1, 'INTOCÁVEL', '2021-10-12', '15:00', 1),
(1, 2, 1, 'MÁQUINA DO TEMPO', '2021-09-13', '17:20', 1),
(3, 2, 3, 'PREVIAS.ZIP', '2021-08-14', '13:13', 1),
(4, 3, 2, 'WALLY', '2019-04-28', '19:55', 1),
(5, 5, 2, 'DEBOCHADO', '2020-07-09', '15:47', 0),
(5, 1, 2, 'DALE DALE', '2020-06-18', '13:45', 1),
(5, 1, 2, 'POC POC', '2020-05-18', '06:30', 0),
(6, 4, 3, 'CHAMA!', '2021-09-04', '20:12', 1)
GO