import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
//este componente es el nuevo del fitness
import Card from './CARD/card'
import Welcome from './components/Welcome'

//import Excercises from './pages/Excercises'

import AppA from './components/App'

//variable que guarda el root
const container= document.getElementById('root')

//segunda manera de Renderizar y más utilizada, donde se utiliza un compoenten general y ese embebe los demás(es decir que lo de abajo se pego en el 
//componente que se esta renderizando"excercises))
ReactDOM.render(
  <AppA />,container
);

//primera Manera de renderizar que es colocando un tag y llamando e importando los componentes
/*ReactDOM.render(
  //Solo pueden renderizar un tag, para que pueda renderizar varios componentes, se coloca un tag general y se embene adentro
  //
<div>
  
    <Welcome
        username="Carlos R"
    />
    <Card title="TÉCNICA POR AC"
    description="Vamos aprender a mejorar nuestras técnicas con el mejor"
    img=""
    leftColor="#A74CF2"
    rightColor="#617BFB"
    ></Card>
  </div>,container
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
