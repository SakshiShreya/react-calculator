import React from 'react';

const Keypad = props => (
  <div className="keypad__container">
    <div className="keypad__container__horizontal">
      <div className="keypad__left-side">
        <div className="keypad__row">
          <button className="key">C</button>
          <button className="key">+/-</button>
          <button className="key">%</button>
        </div>
        <div className="keypad__row">
          <button className="key">7</button>
          <button className="key">8</button>
          <button className="key">9</button>
        </div>
        <div className="keypad__row">
          <button className="key">4</button>
          <button className="key">5</button>
          <button className="key">6</button>
        </div>
        <div className="keypad__row">
          <button className="key">1</button>
          <button className="key">2</button>
          <button className="key">3</button>
        </div>
        <div className="keypad__row">
          <button className="key">0</button>
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

export default Keypad;
