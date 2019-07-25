import React from 'react';
import './style.css';


function Jumbotron(props) {
    return (
        <div>
            <img src={require("./forest.jpg")} class="img-fluid" alt="Responsive image"></img>
           <h2>Animals Memory Game</h2>
                
        </div>
    );
}

export default Jumbotron;