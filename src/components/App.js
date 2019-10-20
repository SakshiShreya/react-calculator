import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import OutputScreen from './OutputScreen';
import Keypad from './Keypad';
import '../styles/calculator.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="app">
          <OutputScreen historyText="2 * 137.65" output="275.3" />
          <Keypad />
        </div>
      </HashRouter>
    );
  }
}

export default App;
