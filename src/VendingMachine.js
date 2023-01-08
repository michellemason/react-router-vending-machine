import React from "react";
import { NavLink } from "react-router-dom";
import "./VendingMachine.css";


const VendingMachine = () => {
    return (
        <div>
            <nav className="NavBar">
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/soda">Soda</NavLink>
                <NavLink exact to="/chips">Chips</NavLink>
                <NavLink exact to="/apple">Apple</NavLink>
            </nav>
            <h1>Welcome to the vending machine. Please choose a snack.</h1>
            <img
                src="https://media.giphy.com/media/XwSKnh6Glv8l7zeX8C/giphy.gif"
            />
            <div className="Choices">
                <div className="Choices-nav"><NavLink exact to="/soda">Soda</NavLink></div>
                <div className="Choices-nav"><NavLink exact to="/chips">Chips</NavLink></div>
                <div className="Choices-nav"><NavLink exact to="/apple">Apple</NavLink></div>
            </div>
        </div>
    );  
}

export default VendingMachine;