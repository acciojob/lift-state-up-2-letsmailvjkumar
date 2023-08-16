import React, { useState } from 'react';

import "../styles/App.css"
// Parent Component
const ParentComponent = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>{inputValue}</p>
      <ChildComponent inputValue={inputValue} setInputValue={setInputValue} />
    </div>
  );
};

// Child Component
const ChildComponent = ({ inputValue, setInputValue }) => {
  return (
    <div className="child">
      <h2>Child Component</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
};

export default ParentComponent;
