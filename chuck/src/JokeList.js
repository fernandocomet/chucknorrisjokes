import React, { Component } from "react";
import Joke from "./Joke";
import chuckapproved2 from "./assets/chuckapproved.png";
import "./JokeList.css";
import axios from "axios";
import uuid from "uuid/v4";
const API_BASE_URL = "https://api.chucknorris.io/jokes/random";

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };

  constructor(props) {
    super(props);
    this.state = { jokes: [] };
    this.handlePoints = this.handlePoints.bind(this);
  }

  async componentDidMount() {
    let jokes = [];
    for (let i = 0; i < this.props.numJokesToGet; i++) {
      let res = await axios.get(`${API_BASE_URL}`);
      jokes.push({ id: uuid(), joke: res.data.value, points: 0 });
      console.log(i + "- " + res.data.value);
    }
    this.setState({ jokes: jokes });
  }

  handlePoints(id, delta) {
    this.setState(
        st => ({
            jokes: st.jokes.map(item =>
            item.id === id ? { ...item, points: item.points + delta } : item
      ),
    }));
  }

  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <div className="JokeList-title">
            <span>ChuckNorris</span> Jokes
          </div>
          <img src={chuckapproved2} alt="Chuck Approved" />
          <button className="JokeList-newjokes">New Jokes</button>
        </div>
        <div className="JokeList-jokes">
          {this.state.jokes.map((item, idx) => (
            <Joke
              key={item.id}
              item={item.joke}
              points={item.points}
              rankUp={() => this.handlePoints(item.id, 1)}
              rankDown={() => this.handlePoints(item.id, -1)}
            />
          ))}

          {/* <Joke {item} /> */}
        </div>
      </div>
    );
  }
}

export default JokeList;

// 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F384776361890890625%2F&psig=AOvVaw2boH2g-P_KCikCq5QEHXJK&ust=1587464249295000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPj1tKfj9ugCFQAAAAAdAAAAABAE
// onClick={this.props.upvote}