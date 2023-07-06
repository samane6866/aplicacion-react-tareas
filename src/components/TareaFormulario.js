import React from "react";
import "../hojas-de-estilo/Tareaformulario.css"

function TareaFormulario(props) {
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
