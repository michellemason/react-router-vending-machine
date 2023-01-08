import React from "react";
import { NavLink } from "react-router-dom";
import "./Button.css";
import "./VendingMachine.css";

const Apple = () => {
    return (
        <div>
            <nav className="NavBar">
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/soda">Soda</NavLink>
                <NavLink exact to="/chips">Chips</NavLink>
                <NavLink exact to="/apple">Apple</NavLink>
            </nav>
            <h1>~ * wHaT a BoRiNG ChOiCe * ~</h1>
            <img 
                src="https://media.giphy.com/media/i6JLRbk4f2gIU/giphy.gif"
            />
            <div>
                <button className="Button">
                <NavLink exact to="/">Go Back</NavLink>
                </button>
            </div>
        </div>
    )
}

export default Apple;