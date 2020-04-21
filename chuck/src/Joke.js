import React, { Component } from "react";
import './Joke.css';
import chucknorris0 from "./assets/chucknorris0.jpeg";
import chucknorris1 from "./assets/chucknorris1.jpeg";
import chucknorris2 from "./assets/chucknorris2.jpeg";
import chucknorris3 from "./assets/chucknorris3.jpeg";
import chucknorris4 from "./assets/chucknorris4.jpeg";
import chucknorris5 from "./assets/chucknorris5.jpeg";
import chucknorris6 from "./assets/chucknorris6.jpeg";
import chucknorris7 from "./assets/chucknorris7.jpeg";
import chucknorris8 from "./assets/chucknorris8.jpeg";
import chucknorris9 from "./assets/chucknorris9.jpeg";


class Joke extends Component {
    static defaultProps = {
    images: [chucknorris0, chucknorris1, chucknorris2, chucknorris3, chucknorris4, chucknorris5, chucknorris6, chucknorris7, chucknorris8, chucknorris9]
  };

  render() {
    let avatar;
    if(this.props.points < 0){avatar = this.props.images[0]}
    else if(this.props.points > 9){avatar = this.props.images[9]}
    else{avatar = this.props.images[this.props.points]}
    

    return (
      <div className="joke">
        <div className="joke-punctuation">
            <button onClick={this.props.rankUp} className="joke-button"> ↑ </button>
            <div className="joke-points">{this.props.points}</div>
            <button onClick={this.props.rankDown} className="joke-button"> ↓ </button>
        </div>
        <div className="joke-text"> {this.props.item}</div>
        <div className="joke-avatar"><img src={avatar}/></div>
      </div>
    );
  }
}

export default Joke;
