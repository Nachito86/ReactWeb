import React from 'react'
import  Card from '../CARD/card'

const ejercicioLista=(props)=>(
    <div>
                    {props.ejercicios.map((ejercicio)=>{
                            return(
                                <Card
                                key={ejercicio.id}//esta linea se agrega; no es obligatoria pero React la recomienda ya que cada registro debe ser unico, siempre va hacer "KEY"  
                                title={ejercicio.title}
                                description={ejercicio.description}
                                img={ejercicio.img}
                                leftColor={ejercicio.leftColor}
                                rightColor={ejercicio.rightColor}
                                ></Card>
                            )
                    })}
             </div>
)

/*function ejercicioLista(props)
    {
            return(
                <div>
                    {props.ejercicios.map((ejercicio)=>{
                            return(
                                <Card title={ejercicio.title}
                                description={ejercicio.description}
                                imagen={ejercicio.imagen}
                                leftColor={ejercicio.leftColor}
                                rightColor={ejercicio.rightColor}
                                ></Card>
                            )
                    })}
             </div>
            )
    }*/

    export default ejercicioLista