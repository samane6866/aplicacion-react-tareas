import logo from './logo.svg';
import './App.css';
import freecodecamplogo from "./images/800px-FreeCodeCamp_logo.png"

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img src={freecodecamplogo } className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
      </div>
    </div>
  );
}

export default App;
