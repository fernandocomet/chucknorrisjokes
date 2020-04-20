import React, { Component } from "react";

class Joke extends Component {
  static defaultProps = {
    images: [],
  };

  render() {
    return (
      <div>
        <button onClick={this.props.rankUp}> ↑ </button>
        {this.props.points}
        <button onClick={this.props.rankDown}> ↓ </button>
        {this.props.item}
      </div>
    );
  }
}

export default Joke;
