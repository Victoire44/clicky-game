import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import animals from "./animals.json";
import shuffle from 'shuffle-array';

import "./App.css";

class App extends Component {
  state = {
    animals,
    score: 0,
    topScore: 0,
    message: "",
    cardCliked: []
  }


  cardClicked = id => {
    if (this.state.animals.includes(id)) {
      this.setState({
        message: "You guessed incorrectly!"
      });
      shuffle(this.state.animals);
      this.reset()
    } else {
      this.setState({
        score: this.state.topScore + 1,
        topScore: this.state.topScore + 1,
        message: "You guessed correctly!"
      });
      shuffle(this.state.animals);
    }
  };

  win = () => {
    if (this.state.topScore === 12) {
      this.setState({
        message: "You win!"
      });
      shuffle(this.state.animals);
      this.reset()
    }
  }

  reset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      message: ""
    });
  };

  render() {
    return (
      <Wrapper>
        <NavBar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <div className="container">
          <div className="row">
            {this.state.animals.map(card => (
              <Card
                cardClicked={this.cardClicked}
                reset={this.reset}
                win={this.win}
                id={card.id}
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
