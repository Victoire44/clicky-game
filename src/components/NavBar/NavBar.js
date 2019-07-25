import React from 'react';
import './style.css';


function Navbar(props) {
    return (
        <div id="navbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-3" id="brand">
                        <h1 class="navbar-brand">Clicky game</h1>
                    </div>
                    <div className="col-sm-6" id="message">
                        <div>{props.message}</div>
                    </div>
                    <div className="col-sm-3" id="score">
                        <div>Score: {props.score} | Top Score: {props.topScore}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;