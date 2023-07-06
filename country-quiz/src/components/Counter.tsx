import { useState } from 'react';

export const Counter = () => {
    const [count, setCounter] = useState(0);

  return (
    <div>
        <h2>{ count }</h2>
          <button
            onClick={() => {
              setCounter( count + 1 );
            }}
          >
            +1
          </button>
          <button
            onClick={() => {
              setCounter( count - 1);
            }}
          >
            -1
          </button>
          <button
            onClick={() => {
              setCounter(0);
            }}
          >
            Reset
          </button>
    </div>
  )
}
