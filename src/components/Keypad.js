import React from 'react';

const Keypad = props => (
  <div className="keypad__container">
    <div className="keypad__container__horizontal">
      <div className="keypad__left-side">
        <div className="keypad__row">
          <span className="key">C</span>
          <span className="key">+/-</span>
          <span className="key">%</span>
        </div>
        <div className="keypad__row">
          <span className="key">7</span>
          <span className="key">8</span>
          <span className="key">9</span>
        </div>
        <div className="keypad__row">
          <span className="key">4</span>
          <span className="key">5</span>
          <span className="key">6</span>
        </div>
        <div className="keypad__row">
          <span className="key">1</span>
          <span className="key">2</span>
          <span className="key">3</span>
        </div>
        <div className="keypad__row">
          <span className="key">0</span>
          <span className="key"></span>
          <span className="key"></span>
        </div>
      </div>
      <div className="keypad__right-side">
        <div className="keypad__row">
          <span className="key">/</span>
        </div>
        <div className="keypad__row">
          <span className="key">X</span>
        </div>
        <div className="keypad__row">
          <span className="key">-</span>
        </div>
        <div className="keypad__row">
          <span className="key">+</span>
        </div>
      </div>
    </div>
    <div className="keypad__equal-button">
      <div className="equal-key">=</div>
    </div>
  </div>
);

export default Keypad;
