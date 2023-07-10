import React from "react";
import "../hojas-de-estilo/Tarea.css";
import { AiFillCloseCircle } from "react-icons/ai";
function Tarea({ texto, completada, id, completarTarea, eliminarTarea }) {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className="tarea-icono" onClick={()=>eliminarTarea(id)}>
        <AiFillCloseCircle />
      </div>
    </div>
  );
}

export default Tarea;
