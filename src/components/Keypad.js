import React, { Component } from 'react';

const Keypad = props => (
  <div className="keypad__container">
    <div className="keypad__container__horizontal">
      <div className="keypad__left-side">
        <div className="keypad__row">
          <input type="button" className="key" value="C" />
          <input type="button" className="key" value="+/-" />
          <input type="button" className="key" value="%" />
        </div>
        <div className="keypad__row">
          <input type="button" className="key" onClick={props.onKeyClick} value="7" />
          <input type="button" className="key" onClick={props.onKeyClick} value="8" />
          <input type="button" className="key" onClick={props.onKeyClick} value="9" />
        </div>
        <div className="keypad__row">
          <input type="button" className="key" onClick={props.onKeyClick} value="4" />
          <input type="button" className="key" onClick={props.onKeyClick} value="5" />
          <input type="button" className="key" onClick={props.onKeyClick} value="6" />
        </div>
        <div className="keypad__row">
          <input type="button" className="key" onClick={props.onKeyClick} value="1" />
          <input type="button" className="key" onClick={props.onKeyClick} value="2" />
          <input type="button" className="key" onClick={props.onKeyClick} value="3" />
        </div>
        <div className="keypad__row">
          <input type="button" className="key" onClick={props.onKeyClick} value="0" />
          <input type="button" className="key" />
          <input type="button" className="key" />
        </div>
      </div>
      <div className="keypad__right-side">
        <div className="keypad__row">
          <input type="button" className="key" value="/" />
        </div>
        <div className="keypad__row">
          <input type="button" className="key" value="x" />
        </div>
        <div className="keypad__row">
          <input type="button" className="key" value="-" />
        </div>
        <div className="keypad__row">
          <input type="button" className="key" value="+" />
        </div>
      </div>
    </div>
    <div className="keypad__equal-button">
      <div className="equal-key">=</div>
    </div>
  </div>
);

export default Keypad;
