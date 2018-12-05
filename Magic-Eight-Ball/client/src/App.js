import React, { Component } from 'react';
import eightBall from './8ball.png';
import './App.css';
import Ask from './Ask.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>The Millennial Magic Eight Ball</h1>
          <img src={eightBall} className="eight-ball" alt="8ball" />
          <form>
            <input type="text" name="question" className="question" /><br></br>
            <input type="submit" value="Ask the ball" className="btn" />
          </form>
          <div><Ask /></div>
        </header>
      </div>
    );
  }
}

export default App;
