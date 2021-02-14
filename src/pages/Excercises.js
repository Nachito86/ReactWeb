import React from 'react'
import Welcome from '../components/Welcome'
import EjercicioLista from '../components/ejercicioLista'
import Siguiente from '../components/Siguiente'


const Excercises =({dataE})=>(
    //React solo puede retonrar un elemento, casi siempre se embebe en un div, pero existe otra forma
            // y es React.Fragment: el cual no crea un div ni nada.. pero deja retonrar m[as de un elemento]
            <React.Fragment>
            <Welcome username="BIENVENIDOS" />
            <EjercicioLista ejercicios={dataE} />
                    <br />
                    <br />
                    <br />
                    <br />
            <Siguiente/>
        </React.Fragment>
)

export default Excercises 



