import React from "react";
import "./style.css";


function Card(props) {
    return (
        <div className="col-md-3">
            <div className="card mb-4">
                <div className="img-container">
                    <img onClick={() => props.cardClicked(props.id)} src={props.image} alt={props.name} id={props.id} />
                </div>
            </div>
        </div>
    )
}

export default Card;
