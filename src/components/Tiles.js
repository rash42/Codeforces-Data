import React from "react";
import './Tiles.css'
import { useNavigate } from 'react-router-dom';

function Tiles(props) {
    const navigate = useNavigate()
    return (
        <div className="card text-white bg-dark mb-3 len18 col-sm">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.text}</p>
                <button className="btn btn-light" onClick={()=>navigate(props.link)}>Let's explore!</button>
            </div>
        </div>
    )
}

export default Tiles