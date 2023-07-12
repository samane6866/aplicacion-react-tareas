import React, { useState } from "react";
import "../hojas-de-estilo/Tareaformulario.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");
// extraer el cambio de campo de input donde escribe el usario y asignamos como una nueva valor a input
  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  // este funcion va ser encargada de enviar el form(tarea) cuando hacemos click a button de agregar tarea el argumento e es muy importante aqui, ya que evita  de cargar la pagina despues de enviar form

  // +++cada tarea debe tener un identificador unica por esta razon creamo un id unica para cada elemento, hemos installado un packete uuid npm para gener un id unica para cada tarea.
  const manejarEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    console.log(tareaNueva);
    // onsubmit props
    props.onSubmit(tareaNueva);
  };
  return (
    // onsubmit el evento que envia el formulario
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
