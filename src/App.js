import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import animals from "./animals.json";

import "./App.css";

class App extends Component {
  state = {
    animals,
    score: 0,
    topScore: 0,
    message: ""
  }

  addOne = () => {
    // if (//l'id est different)
    this.setState({ score: this.state.score + 1 });
  };


  render() {
    return (
      <Wrapper>
        <NavBar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron/>
        <div class="container">
          <div class="row">
            
              {this.state.animals.map(card => (
                <Card
                  image={card.image}
                />
              ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;
