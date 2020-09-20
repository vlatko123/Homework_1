import React, {Componet} from 'react';
import './Main.css';
import img from './../../Components/mainInfo/img.jpg';


function LeftSide() {
    return(
        <div className = "picture">
            <img src={img} alt="Vlatko"/>
            <p>It's me</p>
        </div>
    )
}

export default LeftSide;