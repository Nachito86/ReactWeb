//import React from 'react'
import Error from './500'
import ExercisesNew from './ExerciseNew'
import Loading from '../components/Loading'

//para hook utilizamos esta
import React,{useState} from 'react'
import configWS from '../config'



class  ExcercisesNewContainer extends React.Component{

    state={
        form:{
            id:'',
            title:'',
            description:'',
            img:'',
            leftColor:'',
            rightColor:''
        },
        loading:false,
        error:null
    }

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit=async e=>{
            this.setState({
                loading:true
            })
        e.preventDefault()
        try{
                let config={
                    method:'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(this.state.form)
                }

                let res= await fetch(`${configWS.urlWebservices}/createEjercicio`,config)
                let json=await res.json()
                console.log(json)
                if(json.errorSaso!=null)
                {
                    this.setState({
                        error:true
                    })
                }
                else
                {
                    this.setState({
                        loading:false
                    })
                    this.props.history.push('/excercises')
                }

               
        }
        catch(error)
        {
            this.setState({
                loading:false,
                error:true
            })
        }
    }
    render(){
        if(this.state.error)
        {
            return <Error />
        }
        return <ExercisesNew 
                    form={this.state.form}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    />
             
        
                    
    }
  
}
export default ExcercisesNewContainer

