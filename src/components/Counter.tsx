import React from "react";
import classes from "./Counter.module.scss";

export default function Counter() {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className={classes}>
            <button className={classes.btn} onClick={() => setCount(count + 1)}>+</button>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
        </div>
    );
}
