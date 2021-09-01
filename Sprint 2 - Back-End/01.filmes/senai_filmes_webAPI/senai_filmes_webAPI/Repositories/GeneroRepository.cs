using senai_filmes_webAPI.Domains;
using senai_filmes_webAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace senai_filmes_webAPI.Repositories
{
    public class GeneroRepository : IGeneroRepository
    {
        /// <summary>
        /// String de conexão com banco de dados que receber parâmetros.
        /// Data source= Nome do Servidor
        /// Initial catalog = Nome do Banco de Dados
        /// user ID= sa; pwd= Senai@132 = Faz autenticação com SQL SERVER passando o Login e Senha
        /// Integrated Security=true = Faz autenticação com o usuario do sistema(windows)
        /// </summary>
        private string stringConexao = @"Data Source=NOTE0113C5; initial catalog=CATALOGO; user Id=sa; pwd=Senai@132";
        public void AtualizarIdCorpo(GeneroDomain generoAtualizado)
        {
            throw new NotImplementedException();
        }

        public void AtualizarIdUrl(int idGenero, GeneroDomain generoAtualizado)
        {
            throw new NotImplementedException();
        }

        public GeneroDomain BuscarPorId(int idGenero)
        {
            throw new NotImplementedException();
        }

        public void Cadastrar(GeneroDomain novoGenero)
        {
            throw new NotImplementedException();
        }

        public void Deletar(int idGenero)
        {
            throw new NotImplementedException();
        }

        /// <summary>
        /// Lista todos os gêneros
        /// </summary>
        /// <returns>Uma Lista de Gêneros</returns>
        public List<GeneroDomain> ListarTodos()
        {
            List<GeneroDomain> listaGeneros = new List<GeneroDomain>();

            //Declara a SqlConnectio con passando a stringConexao como parâmetro.
            using (SqlConnection con = new SqlConnection(stringConexao))
            {
                string QuerySelectAll = "SELECT idGenero, nomeGenero FROM GENERO";

                //Abre a conexão com banco de dados
                con.Open();

                //Declarando SqlDataReader rdrc percorrer a tabela do nosso banco de dados.
                SqlDataReader rdr;

                //Declara o SqlCommand passando da query que será executada e a conexão com parametros.
                using (SqlCommand cmd = new SqlCommand(QuerySelectAll, con))
                {
                    //executa
                    rdr = cmd.ExecuteReader();

                    //Enquanto gouver registros para serem lidos no rdr, o laço se repete
                    while(rdr.Read())
                    {
                        GeneroDomain genero = new GeneroDomain()
                        {
                            //atribui a propriedade idGenero o valor da primeira coluna do banco de dados.
                            idGenero = Convert.ToInt32(rdr[0]),

                            //atribui a propriedade nomeGenero o valor da segunda coluna do banco de dados.
                            nomeGenero = rdr[1].ToString()
                        };
                        //adiciona o objeto genero criado a lista listaGeneros.
                        listaGeneros.Add(genero);
                    }
                }
            };

            return listaGeneros;
        }
    }
}
