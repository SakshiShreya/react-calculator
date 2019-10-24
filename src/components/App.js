import React from 'react';
import { HashRouter } from 'react-router-dom';
import OutputScreen from './OutputScreen';
import Keypad from './Keypad';
import '../styles/calculator.css';

class App extends React.Component {
  state = {
    output: 0,
    historyText: 0
  };

  onKeyClick = key => {
    console.log(key);
    if (typeof key === 'number') {
      this.setState(prevState => {
        console.log(prevState);
        return { output: prevState.output * 10 + key };
      });
    }
  };

  hello(key) {
    console.log(key);
  }

  render() {
    return (
      <HashRouter>
        <div className="app">
          <OutputScreen historyText="2 * 137.65" output={this.state.output} />
          <Keypad onKeyClick={this.onKeyClick} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
