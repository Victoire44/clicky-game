import React from 'react';
import './style.css';


function NavBar(props) {
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <img src={require("./logo.png")} alt="logo" className="logo"></img>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {props.message}
                        </li>
                        <li className="nav-item">
                            Score: {props.score} | Top Score: {props.topScore}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;