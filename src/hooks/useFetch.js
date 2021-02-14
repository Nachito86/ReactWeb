import {useState,useEffect} from 'react'

//url es nuestro parametro para este hook
const useFetch=url=>{
    const [data,seetData]=useState([])
    const [error,setError]=useState(null)
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
      const  fetchResource=async()=>{
            try{
                //let res=await fetch('https://reactsincapas.azurewebsites.net/api/Ejercicios/GetAllEjercicios',{
                    let res=await fetch(url,{
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
        fetchResource()
        //los parametros se colocan en la siguiente linea (url); para poder ser utilizadas en la parte superior.
    },[url])

    return {data,loading,error}
}


export default useFetch