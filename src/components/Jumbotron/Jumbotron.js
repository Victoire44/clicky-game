import React from 'react';
import './style.css';

function Jumbotron() {
    return (
        <div className="jumbotron text-center d-flex align-items-center">
            <div className="container text-light">
                <h2>Animals Memory Game</h2>
                <h3>Click on an image to earn points, but don't click on any more than once!</h3>
            </div>
        </div>
    );
}

export default Jumbotron;
