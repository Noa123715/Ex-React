import React from "react";
import { AppContext } from "../context/context";

export default function Counter() {
    const { counter, setCounter } = React.useContext(AppContext);

    return (
        <div className="container">
            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
        </div>
    )
}