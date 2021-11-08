import React, { useState } from 'react';

function Counter() {
    const[count, setCount] = useState(0);

    return (
        <div>
            <p>This is our Counter</p>
            <p>{ count }</p>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    )
}

export default Counter;