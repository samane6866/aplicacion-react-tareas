import React from "react";
import "../hojas-de-estilo/Tarea.css"
import { AiFillCloseCircle} from "react-icons/ai";
function Tarea({ texto }) {
  return (
      <div className="tarea-contenedor">
          <input/>
      <div className="tarea-texto">{texto ="Aprender React"}</div>
          <div className="tarea-icono">
          <AiFillCloseCircle/>
      </div>
    </div>
  );
}

export default Tarea;
