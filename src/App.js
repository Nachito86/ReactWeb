import logo from './assets/images/logo.svg';
import './assets/css/App.css';
 
//este es el principal
//IMPORTO LOS DEMÁS COMPONENTES
//import MiComponente from './components/MiComponente';
import EjemploAxios from './components/EjemploAxios';




function App() {
  var nombrePropietario= "ALBERT ALEJANDRO";
  return (
    <div>
      <header className="App-header rounded-pill">
        <img src={logo} className="App-logo" alt="logo" /> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {holaMundo(nombrePropietario,"Demo")}
   
        </a>
       
      </header>
      
      <EjemploAxios/>  
      </div>
  );
}

function holaMundo(nombre,texto2){
  //Para poder devolver varia linea de HTML se debe colocar en una etiqueta que los empaquete
  //es decir Si elimino el Div, me genera error, ya que serian 2 objetos, al empaqutarlo en un div
  //funciona como un solo obejeto
  //si nos damos cuenta JSX se puede incrustar HTML y JavaScritp al mismo tiempo.
  //Colocarlo entre parentisis es Mejor Pratica..
  let titulopagina= 
      (
        <div>
            <h2>PAGINA DE {nombre}</h2>
            <h4>{texto2}</h4>
        </div>
       );
  return titulopagina;
}

export default App;
