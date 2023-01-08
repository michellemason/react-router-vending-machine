import React from "react";
import { NavLink } from "react-router-dom";
import "./VendingMachine.css";
import "./Button.css";

const Soda = () => {
    return (
        <div>
            <nav className="NavBar">
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/soda">Soda</NavLink>
                <NavLink exact to="/chips">Chips</NavLink>
                <NavLink exact to="/apple">Apple</NavLink>
            </nav>
            <h1>YUMMMM SODA</h1>
            <img 
                src="https://media.giphy.com/media/py1QeWtxdRzxK/giphy.gif"
            />
            <div>
                <button className="Button">
                <NavLink exact to="/">Go Back</NavLink>
                </button>
            </div>
        </div>
    )
}

export default Soda;