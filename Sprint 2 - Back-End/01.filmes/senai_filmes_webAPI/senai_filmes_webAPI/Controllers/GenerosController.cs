using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using senai_filmes_webAPI.Domains;
using senai_filmes_webAPI.Interfaces;
using senai_filmes_webAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
/// <summary>
/// Controlador responsável pelo end points referentes aos generos.
/// </summary>

namespace senai_filmes_webAPI.Controllers
{
    //Define que o tipo de resposta da API será no formato JSON
    [Produces("applicaton/json")]

    //Define que a rota de um requisição será no formato domínio/api/nomeController.
    //ex: http://localhost:5000/api/generos
    [Route("api/[controller]")]
    //Define que é um Controlador de API.
    [ApiController]
    public class GenerosController : ControllerBase
    {
        /// <summary>
        /// Objeto que irá receber todos os métodos definidos na interface
        /// </summary>
        private IGeneroRepository _GeneroRepository { get; set; }

        /// <summary>
        /// Instancia um objeto _GeneroRepository para que haja referencia dos métodos no repositório
        /// </summary>
        public GenerosController()
        {
            _GeneroRepository = new GeneroRepository();

        }

        [HttpGet]
        //IActionResult = Resultado de uma acao.
        //Get() = nome generico

        public IActionResult Get()
        {
            //Lista de generos
            //Se conectar com o Repositorio

            //Criar uma lista nomeada listaGeneros para receber os dados.
            List<GeneroDomain> ListaGeneros = _GeneroRepository.ListarTodos();

            //Retorna os status code 200(OK) com a lista generos no formato JSON
            return Ok(ListaGeneros);
        }
    }
}
