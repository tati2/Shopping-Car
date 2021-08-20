import "./index.css";
import React, { Component } from "react";
import Carro from "./assets/car.svg";

class App extends Component {
  state = {
    Products: [
      {
        carro: "Jetta",
        montadora: "Volkswagen",
        preço: 144000.0,
        tipo: "Sedan",
        available: true
      },
      {
        carro: "Polo",
        montadora: "Volkswagen",
        preço: 70000.0,
        tipo: "Hatch",
        available: true
      },
      {
        carro: "T-Cross",
        montadora: "Volkswagen",
        preço: 123000.0,
        tipo: "SUV",
        available: true
      },
      {
        carro: "Tiguan R-line",
        montadora: "Volkswagen",
        preço: 146000.0,
        tipo: "SUV",
        available: true
      },
      {
        carro: "Civic",
        montadora: "Honda",
        preço: 115000.0,
        tipo: "Sedan",
        available: true
      },
      {
        carro: "Corolla",
        montadora: "Toyota",
        preço: 110000.0,
        tipo: "Sedan",
        available: true
      },
      {
        carro: "Corolla Cross",
        montadora: "Toyota",
        preço: 184000.0,
        tipo: "SUV",
        available: true
      },
      {
        carro: "Compass",
        montadora: "Jeep",
        preço: 132000.0,
        tipo: "SUV",
        available: true
      },
      {
        carro: "Golf GTI",
        montadora: "Volkswagen",
        preço: 138000.0,
        tipo: "Hatch",
        available: true
      }
    ],
    List: [],
    ShowImage: true
  };

  handleAdd = (item) => {
    item.available = false;
    this.setState({
      List: [...this.state.List, item],
      ShowImage: false
    });
  };

  handleRemove = (e) => {
    e.available = true;
    this.setState({
      List: this.state.List.filter((item) => {
        return item.carro !== e.carro;
      })
    });
  };

  handleClear = () => {
    this.state.List.map((item) => (item.available = true));
    this.setState({
      List: []
    });
  };

  render() {
    return (
      <>
        <div>
          <h1>Loja de carros!</h1>
        </div>
        <section>
          <div className="cards-container">
            {this.state.Products.map((item, index) => {
              return (
                <div
                  className="card-box"
                  key={index}
                  style={
                    !item.available
                      ? { opacity: 0.3, pointerEvents: "none" }
                      : {}
                  }
                >
                  <div className="card-title">
                    <h3>{item.carro}</h3>
                    <button
                      disabled={!item.available}
                      className="btn-choice"
                      onClick={() => {
                        this.handleAdd(item);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <div className="card-details">
                    <p>Montadora: {item.montadora}</p>
                    <p>
                      Preço:
                      {item.preço.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL"
                      })}
                    </p>
                    <p>Tipo: {item.tipo}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cardlist-container">
            <div className="cardlist-box">
              <>
                {this.state.List.length > 0 && (
                  <>
                    <button className="reset-btn" onClick={this.handleClear}>
                      Limpar carrinho
                    </button>
                  </>
                )}
              </>
              <div className="cardlist-boxes">
                <>
                  {(this.state.ShowImage || this.state.List.length === 0) && (
                    <>
                      <img src={Carro} alt="logo" />
                      <h4>Arraste seus carros preferidos aqui :)</h4>
                    </>
                  )}
                </>
                {this.state.List.map((item, index) => (
                  <div className="cardlist" key={index}>
                    <div className="cardlist-title">
                      <p>{item.carro}</p>
                      <button
                        className="cardlist-btn"
                        onClick={() => {
                          this.handleRemove(item);
                        }}
                      >
                        -
                      </button>
                    </div>
                    <div className="cardlist-product">
                      <p>Tipo: {item.tipo}</p>
                      <p>
                        Preço:
                        {item.preço.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL"
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="total-box">
              <p>Total</p>
              <p>
                {this.state.List.reduce(
                  (acc, curr) => acc + curr.preço,
                  0
                ).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL"
                })}
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default App;
