import React from 'react'



const ExcercisesForm=({onChange,onSubmit,form})=>(

    <div className="container center">
                        <form 
                            onSubmit={onSubmit}
                        >
                             <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="id" 
                                    name="id"
                                    onChange={onChange}
                                    value={form.id}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="title" 
                                    name="title"
                                    onChange={onChange}
                                    value={form.title}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="description" 
                                    name="description"
                                    onChange={onChange}
                                    value={form.description}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="img" 
                                    name="img"
                                    onChange={onChange}
                                    value={form.img}
                                />
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="leftColor" 
                                        name="leftColor"
                                        onChange={onChange}
                                        value={form.leftColor}
                                    />
                                </div>
                                <div className="col">
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        placeholder="rightColor" 
                                        name="rightColor"
                                        onChange={onChange}
                                        value={form.rightColor}
                                    />    
                                </div>
                            </div>
                            
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                            >
                                Submit
                            </button>
                        </form>
                </div>
)

//LO REEMPLAZAMOS POR UNO FUNCTIONAL YA QUE DE CALSE NO ES NECESARIO...ESTO PARA QUE CORRA MAS RAPIDO..
//class  ExcercisesForm extends React.Component{

    //para que funcionen el this dentro de las funciones se debe crear un constructor
    //COmo vimo este puede ser opcional; ya que babel lo realiza
   /* constructor(props)
    {
        super(props)
        this.EventButton= this.EventButton.bind(this)
    }
    //esto es un controlador de eventos
    //este se puee manejar asi, pero se requiere del constructor para pasarle el this
    EventButton() {
        console.log(this)
    }*/
    //COn babel se maneja de la siguiente manera y no se requeria el contructor
    /*EventButton=()=>(
         console.log(this)
     )
        render()
        {
            return (
                //en el button se coloca en el nombre de la función
                //<button onClick={sendButton}>
                //esta segunda no es una función- controlador de eventos; y va en el mismo nivel del Render; ouede tener cualquier nombre
                     <button onClick={this.EventButton}>
                    Send
                </button>
            )
        }*/
        //state = {}

       // handleSubmit = e => {
        //    e.preventDefault()
        //    console.log(this.state)
       // }
        
        //de esta forma "e" es el objeto y tenemos acceso del objeto de donde lo cambiamos
        //En este ejemplo vamos a utilizar el mismo para todos los objetos del html; pero en casos de la vida real, cada cual tiene uno diferente; dependiendo.
        //este se va a mover a ExcercisesNew
        /*handleChange = e => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }*/
    
      /*  render(){
            const {onChange,onSubmit,form}=this.props
            return (
            <div className="container">
                        <form 
                            onSubmit={onSubmit}
                        >
                             <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="id" 
                                    name="id"
                                    onChange={onChange}
                                    value={form.id}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="title" 
                                    name="title"
                                    onChange={onChange}
                                    value={form.title}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="description" 
                                    name="description"
                                    onChange={onChange}
                                    value={form.description}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="img" 
                                    name="img"
                                    onChange={onChange}
                                    value={form.img}
                                />
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="leftColor" 
                                        name="leftColor"
                                        onChange={onChange}
                                        value={form.leftColor}
                                    />
                                </div>
                                <div className="col">
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        placeholder="rightColor" 
                                        name="rightColor"
                                        onChange={onChange}
                                        value={form.rightColor}
                                    />    
                                </div>
                            </div>
                            
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                            >
                                Submit
                            </button>
                        </form>
                </div>
            )*/
        //}



//}


//esta puede ser una opci+on donde en el button colocan la nombre de la función


export default ExcercisesForm