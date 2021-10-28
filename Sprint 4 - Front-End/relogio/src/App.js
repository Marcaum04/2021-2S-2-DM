import React from 'react';
import './App.css';

function DataFormatada(props) {
  return <h2>Horário Atual: {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timeID = setInterval(() => {
      this.tempo()
    }, 1000);

    console.log('Eu sou o relógio ' + this.timeID);
  }

  componentWillUnmount() {
    clearInterval(this.timeID)
  }

  tempo() {
    this.setState({
      date: new Date()
    })
  }

  pausarTempo() {
    clearInterval(this.timeID)
    return console.log(`Relógio ${this.timeID} parado`)
  }

  despausarTempo() {
    this.timeID = setInterval(() => {
      this.tempo()
    }, 1000)

    return console.log(`Relógio ${this.timeID} retomado, com o ID ${this.timeID}`)
  }
  render() {
    return (
      <div>
        <h1>Relógio</h1>
        <DataFormatada date={this.state.date} />
        <div className="flex">
        <button type="submit" className="button" onClick={() => this.pausarTempo()}>Parar</button>
        <button type="submit" className="button" onClick={() => this.despausarTempo()}>Continuar</button>
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
      </header>
    </div>
  );
}
export default App;
