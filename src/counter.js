import React, { useState } from 'react';

function Counter() {
    const[count, setCount] = useState(0);

    return (
        <div className="app">
            <div>
            <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>
            { count }
            </h1>
            </div>
            <div className="buttons">
            <button className="decrement" onClick={() => setCount(count - 1)}>
                -
            </button>
            <button className="increment" onClick={() => setCount(count + 1)}>
                +
            </button>
            </div>
        </div>
    )
}

export default Counter;