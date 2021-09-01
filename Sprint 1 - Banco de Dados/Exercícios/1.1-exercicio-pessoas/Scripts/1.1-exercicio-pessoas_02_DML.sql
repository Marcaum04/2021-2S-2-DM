USE UNIDAS
GO

INSERT INTO PESSOA(nomePessoa)
VALUES ('VITÓRIA'), ('MARCOS'),
('ANDRÉ'), ('MATHEUS'),
('KAYKE'), ('GABRIEL')
GO

INSERT INTO TELEFONE(idPessoa, numeroTelefone)
VALUES (4, '5555'), (5, '9999'), (3, '4444'),
(2, '7777'), (6, '3333'), (1, '7777')
GO

INSERT INTO EMAIL(idPessoa, endEmail)
VALUES(2,'m.santos@email.com'), (3,'a.souza@email.com'), 
(5,'k.costa@email.com'), (6,'g.lima@email.com'),
(4,'m.machado@email.com'), (1,'v.santos@email.com')
GO

INSERT INTO CNH (idPessoa, decricao)
VALUES(5,'38795749437'), (2, '59412365852'),
(6, '75142689526'), (3, '45682551698'),
(4, '48415621387'), (1, '56652895412')
GO