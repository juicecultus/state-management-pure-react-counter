import React, { Component, useState } from 'react';

const getStateFromLocalStorage = () => {
  const storage = localStorage.getItem('counterState');
  if (storage) return JSON.parse(storage);
  return { count: 0 };
};

const storeStateInLocalStorage = (state) => {
  localStorage.setItem('counterState', JSON.stringify(state));
  console.log(localStorage);
};

const Counter = ({ max, step }) => {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount((c) => {
      if (c >= max) return c;
      return c + step;
    });
  };
  const decrement = () => setcount(count - 1);
  const reset = () => setcount(0);

  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default Counter;
