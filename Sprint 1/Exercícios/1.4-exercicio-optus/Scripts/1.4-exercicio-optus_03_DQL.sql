USE MUSICPLAYER;
GO

SELECT * FROM ARTISTA
GO

SELECT * FROM ESTILO
GO

SELECT * FROM PLATAFORMA
GO

SELECT * FROM USUARIO
GO

SELECT * FROM ALBUM
GO

--TODOS COM PERMISSÃO DE ADM
SELECT nomeUsuario, email FROM USUARIO
WHERE permissao = 1;
GO

--listar todos os álbuns lançados após um determinado ano de lançamento
SELECT * FROM ALBUM 
WHERE dataLanc > '2020-10-12';
GO

--LISTAR OS DADOS DE UM USUARIO PELO EMAIL
SELECT * FROM USUARIO
WHERE email = 'v@email.com'
GO

--LISTAR OS DADOS DE UM USUARIO PELA SENHA
SELECT * FROM USUARIO
WHERE senha = 'ma@132'

--listar todos os álbuns ativos, mostrando o nome do artista e os estilos do álbum
SELECT titulo, dataLanc, tempo, nomeArtista, nomeEstilo FROM ALBUM
LEFT JOIN ARTISTA
ON ARTISTA.idArtista = ALBUM.idArtista
LEFT JOIN ESTILO
ON ESTILO.idEstilo = ALBUM.idEstilo
WHERE ativo = 1;