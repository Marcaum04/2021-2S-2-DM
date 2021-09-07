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
        //private string stringConexao = @"Data Source=NOTE0113C5\SQLEXPRESS; initial catalog=CATALOGO; user Id=sa; pwd=Senai@132";
        private string stringConexao = @"Data Source=MARCAUM\SQLEXPRESS; initial catalog=CATALOGO; user Id=sa; pwd=senai@132";
        public void AtualizarIdCorpo(GeneroDomain generoAtualizado)
        {
            if (generoAtualizado.nomeGenero != null)
            {
                using (SqlConnection con = new SqlConnection(stringConexao))
                {
                    string queryUpdateBody = "UPDATE GENERO SET nomeGenero = @novoNomeGen WHERE idGenero = @idGenAtualizado";

                    using (SqlCommand cmd = new SqlCommand(queryUpdateBody, con))
                    {
                        cmd.Parameters.AddWithValue("@novoNomeGen", generoAtualizado.nomeGenero);
                        cmd.Parameters.AddWithValue("@idGenAtualizado", generoAtualizado.idGenero);

                        con.Open();

                        cmd.ExecuteNonQuery();
                    }
                }
            }
        }

        public void AtualizarIdUrl(int idGenero, GeneroDomain generoAtualizado)
        {
            using (SqlConnection con = new SqlConnection(stringConexao))
            {
                string queryUpdateUrl = "UPDATE GENERO SET nomeGenero = @novoNomeGen WHERE idGenero = @idGenAtualizado";

                using (SqlCommand cmd = new SqlCommand(queryUpdateUrl, con))
                {
                    cmd.Parameters.AddWithValue("@novoNomeGen", generoAtualizado.nomeGenero);
                    cmd.Parameters.AddWithValue("@idGenAtualizado", idGenero);

                    con.Open();

                    cmd.ExecuteNonQuery();
                }
            }
        }

        public GeneroDomain BuscarPorId(int idGenero)
        {
            using (SqlConnection con = new SqlConnection(stringConexao))
            {
                string querySelectById = "SELECT nomeGenero, idGenero FROM GENERO WHERE idGenero = @idGenero";

                con.Open();

                SqlDataReader reader;

                using (SqlCommand cmd = new SqlCommand(querySelectById, con))
                {
                    cmd.Parameters.AddWithValue("@idGenero", idGenero);

                    reader = cmd.ExecuteReader();

                    if (reader.Read())
                    {
                        GeneroDomain generoBuscado = new GeneroDomain
                        {
                            idGenero = Convert.ToInt32(reader["idGenero"]),

                            nomeGenero = reader["nomeGenero"].ToString()
                        };

                        return generoBuscado;
                    }

                    return null;
                }
            }
        }

        /// <summary>
        /// Cadastrar um novo Gênero.
        /// </summary>
        /// <param name="novoGenero">Objeto novoGenero com as informacoes que serão cadastradas.</param>
        public void Cadastrar(GeneroDomain novoGenero)
        {
            // Declara a conexão passando a string de conexão como parâmetro
            using (SqlConnection con = new SqlConnection(stringConexao))
            {
                // Declara a query que será executada
                string queryInsert = "INSERT INTO GENERO (nomeGenero) VALUES (@nomeGenero)";

                // Declara o SqlCommand cmd passando a query que será executada e a conexão como parâmetros
                using (SqlCommand cmd = new SqlCommand(queryInsert, con))
                {
                    // Passa o valor do parâmetro @nomeGenero
                    cmd.Parameters.AddWithValue("@nomeGenero", novoGenero.nomeGenero);

                    // Abre a conexão com banco de dados
                    con.Open();

                    // Executa a Query
                    cmd.ExecuteNonQuery();
                }
            }
        }

        public void Deletar(int idGenero)
        {
            using (SqlConnection con = new SqlConnection(stringConexao))
            {
                string queryDelete = "DELETE FROM GENERO WHERE idGenero = @id";

                using (SqlCommand cmd = new SqlCommand(queryDelete, con))
                {
                    cmd.Parameters.AddWithValue("@id", idGenero);

                    con.Open();

                    cmd.ExecuteNonQuery();
                }
            }
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
