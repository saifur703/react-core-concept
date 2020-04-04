import React from 'react';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(110);
  const handleIncrease = () => {
    const increment = count + 1;
    setCount(increment);
  };
  const handleDecrease = () => {
    const decrement = count - 1;
    setCount(decrement);
  };
  return (
    <div>
      Counter: {count}
      <br />
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default Counter;
