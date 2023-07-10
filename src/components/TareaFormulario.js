import React from "react";
import "../hojas-de-estilo/Tareaformulario.css"

function TareaFormulario(props) {

  // este funcion va ser encargada de enviar el form(tarea) cuando hacemos click a button de agregar tarea el argumento e es muy importante aqui, ya que permite  de cargar la pagina despues de enviar form
  const manejarEnvio = e => {
    
  }
  return (
    <form className="tarea-formulario">
      <input
        className="tarea-input"
        placeholder="escribe tu tarea"
        type="text"
        name="texto"
      />
      <button className="tarea-button">Agregar tu tarea</button>
    </form>
  );
}

export default TareaFormulario;
