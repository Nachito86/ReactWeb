import  React from 'react';
import '../assets/css/Card.css'
import circlesImg from '../assets/images/circles.png'
//import '../assets/css/fitness.css'




//FASES DE CICLO DE VIDA
//prefijo will o did -  si ocurren ants o despues e cierta acción
///
//Contructor(props)
     //-INICIALIZA el estado del componente
     //-Enlaza eventos
     //-Setear variables globales
//componentWillMount// se ejecuta antes pero esta obselto se debe utilizar componentDidMount()
    //-modificar el estado
    //-NO realiza llamado a APIS
    //- No realiza duscripcion a eventos
//render()
    //Debe ser una funcion pura
    //No debe modificar el estado
//componentDidMOunt() se ejecuta cuando ya se renderizo
    //-el mejor momento para llamar Apis
    //- realizar suscripciones a eventos
    // -Modificar estado

//FASE ACTUALIZACION desde que no se actualice un cambio en el componente
//componentWillReceiveProps(nextProps)
    //-realizar cambios en los estados basados en las nuevas propiedades
//shouldComponentUpdate(nextProps,nextState) //se ejecuta antes de actualizar un componente, una validación anterior para ver si se quiere renderizar o no
    //--validar si queremos renderizar o no el componente
//componentWillUpdate(nextProps,sextState)
    //-Realizar cualquier tipo de preparacion antes de que se actualice la UI

//FASE FINAL
//componentDidUpdate(prevProps,prevState)
    //-es posible intereactuar con el DOM
//componentWillUnmount() se utiliza para hacer la limpieza
    //-Dejar de escuchar eventos
    //-Desucribirse de un WebSoecket
    //-Cancelar peticiones HTPP

//CONTROL DE ERRORES
//componentDidCatch()
    //-Controles de errores

const Card =({title,description,leftColor,img,rightColor})=>(
        <React.Fragment>
                <div className=" card mx-auto Fitness-Card" 
                        style={{
                            backgroundImage: `url(${circlesImg}),linear-Gradient(to right,${leftColor},${rightColor})`
                        }}>
                            <div className="card-body">
                                <div className="row center">
                                    <div className="col-6">
                                        <img src={img} className="float-right" width="96px" height="120px" ></img>
                                    </div>
                                    <div className="col-6 Fitness-Card-Info">
                                        <br></br>
                                        <h1>{title}</h1>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            </div>
                        
                </div>
                <br></br>
     </React.Fragment>
   
)

/*class Card extends React.Component
{
    //se debe  definir el contructor, buena practica, colocar un estado inicial de mi componente
    //estos eventos mutan/modifican luego que ocurre un evento.. aca vamos a simular uno para que se cambie.
    //PARA QUE MUTE; COMO Y AVANZAMOS DE CLASE, ESTO SOBRA
    constructor(props){
        //INICIALIZA el estado del componente
        //Enlaza eventos
        // Setear variables globales
        super(props)
        this.state={
            title:'Nuevo'
        }
    }
   //se ejecuta luego de que un componente es montado
    componentDidMount(){
        //vamos a simular que despues de 5 segundos cambie la información del state.
        setTimeout(()=>{
            this.setState({
                title:'Albert Cepeda'
            })   
        },5000)  
    }
  render()
  {
    const{title,description,leftColor,img,rightColor}=this.props
    const logo='../assets/images/fuerza.jpeg';
    return( 
        <React.Fragment>
            <div className=" card mx-auto Fitness-Card" 
                    style={{
                        backgroundImage: `url(${circlesImg}),linear-Gradient(to right,${leftColor},${rightColor})`
                    }}>
                        <div className="card-body">
                            <div className="row center">
                                <div className="col-6">
                                    <img src={img} className="float-right" width="96px" height="120px" ></img>
                                </div>
                                <div className="col-6 Fitness-Card-Info">
                                    <br></br>
                                    <h1>{title}</h1>
                                    <p>{this.props.description}</p>
                                </div>
                        </div>
                    </div>
                </div>
                <br/>
        </React.Fragment>
    )
  }
}*/

export default Card;