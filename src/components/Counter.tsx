import { useState } from 'react';
import styles from './Counter.module.css';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    return (
        <div className={styles.counter}>
            <h1>Counter</h1>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}