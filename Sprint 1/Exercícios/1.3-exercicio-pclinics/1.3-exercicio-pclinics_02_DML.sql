USE CLINICA_VETERINARIA;
GO

INSERT INTO EMPRESA(nomeEmpresa, endereco)
VALUES('MARABRAZ', 'RUA ALMEIDA MEDEIROS 47'), ('CASA BAHIA', 'RUA LADAINHA MATOS 93')
GO

INSERT INTO TIPO_PET(nomeTipo)
VALUES ('MACACO'),('CACHORRO')
GO

INSERT INTO DONO(nomeDono, telefone)
VALUES ('MATHEUS', '978367467'), ('MARCOS', '936746247')
GO

INSERT INTO RACA(nomeRaca, idTipoPet)
VALUES ('BABUINO', 1), ('SHITSU', 2)
GO

INSERT INTO PET(nomePet, dataNasc, idDono, idRaca)
VALUES ('BOB', '2005-01-26', 1, 1),
('DADDY', '2008-10-04', 2, 2)
GO

INSERT INTO VETERINARIO(nomeVeterinario, idEmpresa)
VALUES('BORGES', 2), ('MATU�', 1)
GO

INSERT INTO ATENDIMENTO(idPet, idVeterinario, dataAtend, horario)
VALUES(2, 1, '2021-09-01', '11:14'), (1, 2, '2021-08-25', '11:26')
GO

