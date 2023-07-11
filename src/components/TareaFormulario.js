import React, { useState } from "react";
import "../hojas-de-estilo/Tareaformulario.css";

function TareaFormulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value)
    
  };

  // este funcion va ser encargada de enviar el form(tarea) cuando hacemos click a button de agregar tarea el argumento e es muy importante aqui, ya que evita  de cargar la pagina despues de enviar form
  const manejarEnvio = (e) => {
    e.preventDefault()
    const tareaNueva = {
      id: 3456,
      texto: input,
      completada:false
    };
  };
  return (
    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        placeholder="escribe tu tarea"
        type="text"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea-button">Agregar tu tarea</button>
    </form>
  );
}

export default TareaFormulario;
