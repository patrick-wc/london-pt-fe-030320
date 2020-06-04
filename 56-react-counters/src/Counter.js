import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);

  return (
    <div>
      <h1>{counter}</h1>
      <div>
        <button className="increment" onClick={increaseCounter}>
          Increase counter
        </button>
        <button className="decrement" onClick={decreaseCounter}>
          Decrease counter
        </button>
      </div>
    </div>
  );
};

export default Counter;
