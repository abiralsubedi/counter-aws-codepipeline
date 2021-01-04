import { useState } from "react";
import "./App.css";

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
            onClick={() => setCounter(prev => prev + 1)}
            className="counter-button"
          >
            +1
          </button>
          <button
            onClick={() => setCounter(prev => prev - 1)}
            className="counter-button"
          >
            - 1
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
