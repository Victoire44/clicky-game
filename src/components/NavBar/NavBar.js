import React from 'react';
import './style.css';


function Navbar(props) {
    return (
        <div>
            <nav class="navbar">
                <div class="container">
                    <img src={require("./logo.png")} alt="logo" class="logo"></img>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <div>{props.message}</div>
                        </li>
                        <li class="nav-item">
                            <div>Score: {props.score} | Top Score: {props.topScore}</div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;