import React, {Component} from 'react'
//este nombre debe ser igual archivo
class MiComponente extends  Component{
    
    //el componente siempre lleva el render
    render(){
     //siempre debe devolver algo
     //Ahora como solo puede devolver un objeto, se puede utilizar el React.Fragment o se podria obviar
       // y empaquetarlo dentro de un div, cualquiera de los dos es valida, o como es el ejemplo
       // coloque ambas; pero es recomedanble usar sola UNA.
       let rutina={
            nombreRutina:'Boxeo Al',
            ejercicios:['sentadillas','1 y 2','lazo'],
            duracion:'50min'
             
               };
     return (
         <React.Fragment>
         <div className="mi-componente">
                <ul class="list-group">
                        <li className="list-group-item active" >Cras justo odio</li>
                        <li className="list-group-item" style={{color:"black"}}>Dapibus ac facilisis in</li>
                        <li className="list-group-item" style={{color:"black"}}>Morbi leo risus</li>
                        <li className="list-group-item" style={{color:"black"}}>Porta ac consectetur ac</li>
                        <li className="list-group-item" style={{color:"black"}}>Vestibulum at eros</li>
                </ul>
                <h1>{'Rutina ALbert Sabado: ' +rutina.nombreRutina}</h1>
                <h2>{'Duración: ' +rutina.duracion }</h2>
                <ol>
                {

                    //map es para recorrer, es como un foreach; que se podria hacer el foreasch pero es mejor
                    //map para utilizar el JSX

                    rutina.ejercicios.map((ruti,i)=>{
                        return(
                                <li key={i}> {ruti} </li>
                        )
                    })
                }
                </ol>
            <hr/>
         </div>
         </React.Fragment>
     );
    }
}

export default MiComponente;