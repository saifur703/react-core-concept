import React, { useState } from 'react';

const StatePractice = () => {
  const [count, setCount] = useState(0);

  const incrementHandle = () => {
    const inc = count + 1;
    setCount(inc);
  };

  const decrementHandle = () => {
    const dec = count - 1;
    setCount(dec);
  };
  return (
    <div>
      <h2>State Practice by Functional Way. {count}</h2>
      <button onClick={incrementHandle}>Increment + 1</button>
      <button onClick={decrementHandle}>Decrement - 1</button>
    </div>
  );
};

export default StatePractice;
