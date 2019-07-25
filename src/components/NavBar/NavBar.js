import React from 'react';
import './style.css';


function Navbar(props) {
    return (
        <div>
            <nav class="navbar">
                <h1 class="navbar-brand" href="#">Clicky game</h1>
                <ul class="navbar-nav">
                    <li lcass="nav-item">
                        <div>{props.message}</div>
                    </li>
                    <li lcass="nav-item">
                        <div>Score: {props.score} | Top Score: {props.topScore}</div>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Navbar;