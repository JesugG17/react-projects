import { useState } from 'react';


export const App = () => {
    const [counter, setCounter] = useState(0);

    
    return (
        <div>
            <h4>{counter}</h4>
            <button onClick={() => setCounter(counter + 1)}>increment</button>
            <button onClick={() => setCounter(counter - 1)}>decrement</button>
        </div>
    );
};
