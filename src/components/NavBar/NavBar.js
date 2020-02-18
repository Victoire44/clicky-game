import React from 'react';
import './style.css';


function NavBar(props) {
    let message = ""
    let color = "white"
    switch (props.status) {
        case "correct":
            message = "You guessed correctly!"
            color = "rgb(18,41,36)"
            break;
        case "incorrect":
            message = "You guessed incorrectly!"
            color = "red"
            break;
        case "win":
            message = "You win!"
            color = "yellow"
            break;
        default:
            message = "Click an image to begin!"
    }
    console.log(message)
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <img src={require("./logo.png")} alt="logo" className="logo"></img>
                    <ul className="navbar-nav">
                        <li className="nav-item" style={{ color: color }}>
                            {message}
                        </li>
                        <li className="nav-item">
                            Score: {props.score} | Top Score: {props.topScore}
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    )
}
export default NavBar;