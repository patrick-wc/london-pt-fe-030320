import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";
/**
 * 1. Create component Counter which will have:
 * - button with class {increment}
 * - button with class {decrement}
 * - h1 element which will represent state value
 * - state should hold {counter} value(default value = 0)
 * - with buttons you should be able to in/decrement {counter} value
 *
 * 2. In App component add button with class {newCounter}
 * 3. when you click {newCounter} you should add new counter to view
 *
 * NOTE: feel free to add some CSS to style your counters.
 */

function App() {
  const [newCounter, setNewCounter] = useState([]);
  const newCounters = () => {
    setNewCounter((newCounter) => [...newCounter, Counter]);
  };
  return (
    <div className="App">
      <button onClick={newCounters} className="newCounter">
        New counter
      </button>
      {newCounter.map((Add) => (
        <Add />
      ))}
    </div>
  );
}

export default App;
