import React from "react";
import { AppContext } from "../context/context";

export default function Counter2() {
    const { counter, setCounter } = React.useContext(AppContext);

    return (
        <div className="container">
            <h1>Counter2: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>➕</button>
        </div>
    )
}