import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div
      style={{
        border: '1px solid black',
        padding: 12,
        margin: '0 auto',
        width: '50%',
      }}
    >
      <h3>Counter</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <button
          id="counter-state-decrement"
          onClick={() => setCounter((c) => c - 1)}
        >
          Decrement -
        </button>
        <span id="value">{counter}</span>
        <button
          id="counter-state-increment"
          onClick={() => setCounter((c) => c + 1)}
        >
          Increment +
        </button>
      </div>
    </div>
  );
}

export default Counter;
