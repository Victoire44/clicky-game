import React, { Component } from "react";
import "./style.css"

function Card(props) {
    return (
        <div class="col-md-3">
            <div className="card mb-4">
                <div className="img-container">
                    <img onClick={props.addOne} src={props.image} alt={props.name} id={props.id} />
                </div>
            </div>
        </div>
    )
}

export default Card;
