import './App.css';
import { Component } from "react";

export default class Repositorios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaRepositorios: [],
      id: 0,
      login: '',
      name: '',
      description: '',
      size: 0,
      created_at: ''
    }
  };

  buscarUsuarioRepositorios = () => {
    console.log('agora vamos fazer a chamada para a api.')

    //funcao nativa JS, ele é uma API com métodos.

    //dentro dos parenteses vamos informar qual é o end point.
    fetch('//api.github.com/user/' + this.state.login + '/repos')
      //por padrao ele sempre inicia como GET.

      .then(resposta => resposta.json())

      //.then( dados => console.log(dados.json()))

      // quando vc tiver uma retorno, vc vai trazer essa resposta em json.

      // Define o tipo de dados do retorno da requisicao como JSON.

      // .then( resposta => resposta.json())

      // Atualiza o state listaTiposEventos com os dados obtidos em formato json.
      .then(dados => this.setState({ listaTiposEventos: dados }))

      //caso ocorre algum erro, mostra no console do navegador

      .catch(erro => console.log(erro))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Page Home</h1>
        </header>
        <main>
          <section>
            <h2>Lista de Repositorios do {this.state.login}</h2>
            
          </section>
        </main>
      </div>
    );
  }
}