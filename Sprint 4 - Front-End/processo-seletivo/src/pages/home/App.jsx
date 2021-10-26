import './App.css';
import { Component } from "react";

export default class Repositorios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaRepositorios: [],
      nomeUsuario: ''
    }
  };

  atualizaEstadoPesquisa = async (event) => {
    await this.setState({
      nomeUsuario: event.target.value
    });

    console.log(this.state.nomeUsuario);
  }

  buscarUsuarioRepositorios = async (event) => {
    event.preventDefault()

    console.log('agora vamos fazer a chamada para a api.')

    fetch(`https://api.github.com/users/${this.state.nomeUsuario}/repos?per_page=10`)
      .then(resposta => resposta.json())
      .then(dados => this.setState({ listaRepositorios: dados }))
      .catch(erro => console.log(erro))

      await console.log(this.state.listaRepositorios)
  }

  render() {
    return (
      <div>
        <header className='header'>
          <h1>GitHub - Repositories</h1>
        </header>
        <main>
          <section className="section-1">
            <h2>Usuário a ser buscado</h2>
            <form onSubmit={this.buscarUsuarioRepositorios}>
              <input onChange={this.atualizaEstadoPesquisa} type="text" placeholder="   Digite um usuário" />
              <button type="submit" disabled={this.state.nomeUsuario === '' ? 'none' : ''}>Buscar</button>
            </form>
          </section>
          <section className="section-2">
            <h2>Lista de Repositorios</h2>
            <table>
              <thead>
                <tr>
                  <th>Repositórios de {this.state.nomeUsuario}</th>
                  <th>Criador</th>
                  <th>Descrição</th>
                  <th>Tamanho</th>
                  <th>Criado em</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.listaRepositorios.map((Repositorio) => {
                    return (
                      <tr key={Repositorio.id}>
                        <td>{Repositorio.name}</td>
                        <td>{Repositorio.owner.login}</td>
                        <td>{Repositorio.description}</td>
                        <td>{Repositorio.size}</td>
                        <td>{Repositorio.created_at}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </section>
        </main>
      </div>
    );
  }
}