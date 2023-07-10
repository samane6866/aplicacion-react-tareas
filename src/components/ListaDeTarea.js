import react, { useState } from "react";
import TareaFormulario from "./TareaFormulario";

function ListaDeTarea() {
  const [tarea, setTarea] = useState([]);
  return (
    <>
      <TareaFormulario />
          <div className="tareas-lista-contenedor">
              
      </div>
    </>
  );
}
export default ListaDeTarea;
