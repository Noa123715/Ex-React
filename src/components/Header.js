import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/context";

export default function Header() {
    const { coins } = React.useContext(AppContext);
    return (
        <div className='p-2 container bg-info'>
            <div className='float-end h5'>coins: {coins}</div>
            <Link to="/">Home</Link> | 
            <Link to="/about">About</Link> | 
            <Link to="/counter">Counter</Link> |     
            <Link to="/counter2">Counter2</Link> |     
            <Link to="/atlas">Atlas</Link> | 
            <Link to="/pixabay">Pixabay</Link>  |  
            <Link to="/vip">Vip</Link>
        </div>
    )
}