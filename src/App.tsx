import React from "react";
import { useState } from "react";
import "./App.css";

const countAmount = 1

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <div className="counter-body">
        <div>
          <h2>Count: {counter}</h2>
        </div>
        <div>
          <button
            onClick={() => setCounter(prev => prev + countAmount)}
            className="counter-button"
          >
            +{countAmount}
          </button>
          <button
            onClick={() => setCounter(prev => prev - countAmount)}
            className="counter-button"
          >
            - {countAmount}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
