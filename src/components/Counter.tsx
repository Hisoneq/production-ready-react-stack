import { useState } from 'react';
import './Counter.scss';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}