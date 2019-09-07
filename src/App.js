import React, { Component } from 'react';
import './App.css';

function Message(result) {

  if (result < 18) {
    return "Precisa comer em!"
  }
  else if (result < 24) {
    return "Peso normal"
  }
  else if (result < 30) {
    return "Acima do peso"
  }
  else {
    return "Atenção a obesidade chegou!"
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      massa: 0,
      altura: 0,
      valor: ""
    }

    this.HandleChangeMassa = this.HandleChangeMassa.bind(this);
    this.HandleChangeAltura = this.HandleChangeAltura.bind(this);
    this.ClickCalcularIMC = this.ClickCalcularIMC.bind(this)
  }

  HandleChangeMassa(e) {
    this.setState({
      massa: e.target.value
    })
  }

  HandleChangeAltura(e) {
    this.setState({
      altura: e.target.value
    })
  }

  ClickCalcularIMC() {
    const { massa, altura } = this.state;

    let valor = massa / (altura * altura);

    this.setState({ valor })
  }
  render() {
    const valor = this.state.valor;
    const result = Number.isNaN(parseFloat(valor)) ? "0" : valor
    const message = Message(result)

    return (
      <div className="App">
        <div className="d-inp">
          <label> Massa<input type="text" placeholder="Informe o seu peso..." onChange={this.HandleChangeMassa} /></label>
          <label> Altura<input type="text" placeholder="Informe a sua altura..." onChange={this.HandleChangeAltura} /></label>
        </div>
        <button onClick={this.ClickCalcularIMC}>Calcular IMC</button>
        {valor > 0 &&
          <p><strong>IMC:</strong> {parseFloat(result).toFixed(2)}</p>
        }
        {valor > 0 &&
          <p>{message}</p>
        }
        

      </div>
    )
  }
}


export default App;
