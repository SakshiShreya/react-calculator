import React from 'react';

const OutputScreen = props => (
  <div className="output-screen">
    <p className="output-screen__history">{props.historyText}</p>
    <h2 className="output-screen__output">{props.output}</h2>
  </div>
);

export default OutputScreen;
