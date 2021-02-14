import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom' //Switch lo que hace es renderear el primer hijo rout que haga match
import ExcercisesContainer from '../pages/ExcercisesContainer'
import ExcercisesNewContainer from '../pages/ExcercisesNewContainer'
import NotFound from './NotFound'

const App=()=>(
    <BrowserRouter>
    <Switch>
        <Route exact path="/excercises" component={ExcercisesContainer} />
        <Route exact path="/excercises/new" component={ExcercisesNewContainer} />
        <Route  component={NotFound} />
    </Switch>
    </BrowserRouter>
)

/*function App()
{
    return(
      
        <BrowserRouter>
        <Switch>
            <Route exact path="/excercises" component={EjerciciosCom} />
            <Route exact path="/excercises/new" component={ExcercisesNew} />
            <Route  component={NotFound} />
        </Switch>
        </BrowserRouter>
    )
}*/
export default App