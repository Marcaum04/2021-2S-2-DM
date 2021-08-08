USE UNIDAS
GO

SELECT nomePessoa, numeroTelefone, endEmail, decricao FROM PESSOA
LEFT JOIN TELEFONE
ON PESSOA.idPessoa = TELEFONE.idPessoa
LEFT JOIN EMAIL
ON PESSOA.idPessoa = EMAIL.idPessoa
LEFT JOIN CNH
ON PESSOA.idPessoa = CNH.idPessoa;