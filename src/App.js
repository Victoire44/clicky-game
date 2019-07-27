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
    status: "none",
    cardsCliked: []
  }

  cardClicked = id => {
    if (this.state.cardsCliked.includes(id)) {
      this.setState({
        score: 0,
        status: "incorrect",
        cardsCliked: []
      });
      shuffle(this.state.animals);

    } else {
      this.state.cardsCliked.push(id)
      const newScore = this.state.score + 1;
      this.setState({
        score: newScore,
        topScore: newScore < this.state.topScore ? this.state.topScore : newScore,
        status: "correct"
          });
      shuffle(this.state.animals);
    }
    
    if (this.state.topScore + 1 === 12) {
      this.setState({
        status: "win",
        score: 0,
        topScore: 0,
        cardsCliked: []
      });
      shuffle(this.state.animals);
    }
  };

  render() {
    return (
      <Wrapper>
        <NavBar
          status={this.state.status}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <div className="container">
          <div className="row">
            {this.state.animals.map(card => (
              <Card
                cardClicked={this.cardClicked}
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
