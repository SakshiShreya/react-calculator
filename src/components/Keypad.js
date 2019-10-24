import React, { Component } from 'react';

class Keypad extends Component {
  onKeyClick(key) {
    return this.props.onKeyClick(key);
  }

  render() {
    return (
      <div className="keypad__container">
        <div className="keypad__container__horizontal">
          <div className="keypad__left-side">
            <div className="keypad__row">
              <button className="key">C</button>
              <button className="key">+/-</button>
              <button className="key">%</button>
            </div>
            <div className="keypad__row">
              <button className="key" onClick={() => this.onKeyClick(7)}>
                7
              </button>
              <button className="key" onClick={() => this.onKeyClick(8)}>
                8
              </button>
              <button className="key" onClick={() => this.onKeyClick(9)}>
                9
              </button>
            </div>
            <div className="keypad__row">
              <button className="key" onClick={() => this.onKeyClick(4)}>
                4
              </button>
              <button className="key" onClick={() => this.onKeyClick(5)}>
                5
              </button>
              <button className="key" onClick={() => this.onKeyClick(6)}>
                6
              </button>
            </div>
            <div className="keypad__row">
              <button className="key" onClick={() => this.onKeyClick(1)}>
                1
              </button>
              <button className="key" onClick={() => this.onKeyClick(2)}>
                2
              </button>
              <button className="key" onClick={() => this.onKeyClick(3)}>
                3
              </button>
            </div>
            <div className="keypad__row">
              <button className="key" onClick={() => this.onKeyClick(0)}>
                0
              </button>
              <button className="key"></button>
              <button className="key"></button>
            </div>
          </div>
          <div className="keypad__right-side">
            <div className="keypad__row">
              <button className="key">/</button>
            </div>
            <div className="keypad__row">
              <button className="key">x</button>
            </div>
            <div className="keypad__row">
              <button className="key">-</button>
            </div>
            <div className="keypad__row">
              <button className="key">+</button>
            </div>
          </div>
        </div>
        <div className="keypad__equal-button">
          <div className="equal-key">=</div>
        </div>
      </div>
    );
  }
}

export default Keypad;
