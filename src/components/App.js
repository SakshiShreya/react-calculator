import React from 'react';
import { HashRouter } from 'react-router-dom';
import OutputScreen from './OutputScreen';
import Keypad from './Keypad';
import '../styles/calculator.css';

class App extends React.Component {
  state = {
    output: 0,
    historyText: ''
  };

  onKeyClick = event => {
    let key = event.target.value;
    if (parseInt(key) !== NaN) {
      this.setState(prevState => ({ output: prevState.output * 10 + parseInt(key), historyText: prevState.historyText + key }));
    }
  };

  render() {
    return (
      <HashRouter>
        <div className="app">
          <OutputScreen historyText={this.state.historyText} output={this.state.output} />
          <Keypad onKeyClick={this.onKeyClick} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
