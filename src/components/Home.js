import React from "react";
import { AppContext } from "../context/context";

const Home = () => {
    const {counter} = React.useContext(AppContext);
    return (
        <div className="container">
            <h1>Home</h1>
            <h2>Number from Counter: {counter}</h2>
        </div>
    )
}

export default Home;