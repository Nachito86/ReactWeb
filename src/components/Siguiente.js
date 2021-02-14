import React from 'react'
import imgsiguiente from '../assets/images/add.png'
import '../assets/css/general.css'
import {Link} from 'react-router-dom'

//esto se logra ya que REACT tiene BABEL incorporado que lo que hace es traformar esto en un JS más nuevo y poder renderizarlo 
const siguiente=()=>(
    <div className="centerAlbert">
            <Link to="/excercises/new"> 
                    <img src={imgsiguiente}></img>
            </Link>
    </div>
);

//esta forma es la tipica, pero es un poco viejo, de todas maneras funciona...
/*function siguiente(props)
{
    return(
        <div className="centerAlbert">
        <Link to="/excercises/new"> 
                <img src={imgsiguiente}></img>
        </Link>
    </div>
    )
}*/

export default siguiente