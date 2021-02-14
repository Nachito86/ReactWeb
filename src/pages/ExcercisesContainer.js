//import React from 'react'
//import Card from '../CARD/card'

//import axios from 'axios'
import Loading from '../components/Loading'
import FatalError from './500'
import Excercises from './Excercises'

//Este hook se comentarea ya que se construyo un hook personalizado (useFetch)
//import React,{useState,useEffect} from 'react'
import useFetch from '../hooks/useFetch'
import config from '../config'


//-------- UTILIZAR HOOK ----------////////////////// DE OTROS HOOK O COMPONENTES FUNCIONALES
//un HOOK para mover los estado es 'useState' aca podemos reemplazar el this.state.. donde se guardabna las variables
// segundo HOOK que vamos a utilizar es 'useEffect' este nos sirve para indicarle a react que debe hacer algo despues de renderizarse, como el componentDidMount
// es decir que el useEffect se ejecuta despues del renderizado o del modificado

const ExcercisesContainer=()=>
{
        const{data,loading,error}=useFetch( `${config.urlWebservices}/GetAllEjercicios`)
        //definicion de l hook
        // const [variable,funcion]=useState(valor de la variable inicial)
        //https://es.reactjs.org/docs/hooks-intro.html
        //esto no lo llevamos a con hook personalizado que creamos.. para mejorar el codigo y poder reutilizarlo
       /* 
       const [data,seetData]=useState([])
        const [error,setError]=useState(null)
        const [loading,setLoading]=useState(true)

        useEffect(()=>{
          const  fetchEjercicios=async()=>{
                try{
                    let res=await fetch('https://reactsincapas.azurewebsites.net/api/Ejercicios/GetAllEjercicios',{
                        headers:{'content-type':'application/json'}
                    })
                    let data=await res.json()
                    seetData(data)
                    setLoading(false)
                }
                catch(error)
                {
                    setError(error)
                    setLoading(false)
                }
            }
            //mandamos ejecutar esta funcion
            fetchEjercicios()
        },[])*/


        if(loading)
        {
            return <Loading />
        }
        if(error)
        {
            return <FatalError />
        }

        return(
                <Excercises
                    dataE={data} />
        )
}

export default ExcercisesContainer;

//VAMOS A UTILIZAR HOOK, ESTA CLASE SE VA A REEMPLAZAR, PERO ASI TAMBIEN SIRVE..
/* class ExcercisesContainer extends React.Component{

    constructor(props){//esta parte de colocar el constructor lo podria obviar ya que Babel lo coloca por nosotros, pero por ahora lo voy a dejar para no olvidarlo
        super(props)//esta linea hace parte del instructor se puede obviar
        this.state={//desde aca es donde va sin el "this"
        //esta data fue utilizada en los primeros videos, enviandola al componente como state.data
        //Ahora como construimos un servicio donde se encuentra dicha informacion, la idea es obtenerla del API
            data:[
                {
                    "id":1,
                    "title":"Guia de técnicas",
                    "description":"Aprender la ténica para que los musculos se esfuercen.",
                    "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06",
                    "leftColor":"#A74CF2",
                    "rightColor":"#617BFB"
                },
                {
                    "id":2,
                    "title":"Skills training",
                    "description":"Habilidad y skilss a lo largo del programa",
                    "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercises02.png?alt=media&token=a5d55381-5f3e-4f25-92dd-560775f96aa2",
                    "leftColor":"#A74CF2",
                    "rightColor":"#617BFB"
                },
                {
                    "id":3,
                    "title":"Fuerza",
                    "description":"ejercicios de Fuerza",
                    "img": "https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise03.png?alt=media&token=8e5301c0-151e-415d-bd2c-655235d9c916",
                    "leftColor":"#A74CF2",
                    "rightColor":"#617BFB"
                }
            ]
            data:[],
            loading:true,
            error:null
        }
    }

  //     componentDidMount() {
  //      axios.get('https://reactsincapas.azurewebsites.net/api/Ejercicios/GetAllEjercicios',
    //                {
    //                    headers:{'content-type':'application/json',"Access-Control-Allow-Origin": "*"}
  //                  })
   //     .then(res => {
   //       const data = res.data;
   //       this.setState({ data });
 //         console.log(data)
  //      })
        
  //  }  

     
   async componentDidMount(){
            await this.fetchEjercicios();
    }

    fetchEjercicios=async()=>{
        try{
            let res=await fetch('https://reactsincapas.azurewebsites.net/api/Ejercicios/GetAllEjercicios',{
                headers:{'content-type':'application/json'}
            })
            let data=await res.json()
            this.setState({
                            data,
                            loading:false
                          })
            console.log(data)
        }
        catch(error)
        {
            this.setState({
                error:error,
                loading:false
              })
        }
    }

   render(){
            if(this.state.loading)
            {
                return <Loading />
            }
            if(this.state.error)
            {
                return <FatalError />
            }

       return(
            <Excercises
                dataE={this.state.data} />
       )
       
   }
} */

