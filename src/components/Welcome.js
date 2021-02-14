import React from 'react'
import '../assets/css/Welcome.css'
import '../assets/css/Card.css'
//estos componentes se les conoce como componentes FUNCIONALES, porque son componentes/funciones de javaScript


const Welcome =(props)=>(
    <dvi className="container">
            <div className="Fitness-User-Info">
                <h1>Hola {props.username}</h1>
                <p>RUTINAS ALBERT</p>
            </div>
        </dvi>
)
/*function Welcome(props){
    return(
        <dvi className="container">
            <div className="Fitness-User-Info">
                <h1>Hola {props.username}</h1>
                <p>Hoy vamos a iniciar tu rutina</p>
            </div>
        </dvi>
    )
}*/
export default Welcome