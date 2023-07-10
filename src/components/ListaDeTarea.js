import react, { useState } from "react";
import TareaFormulario from "./TareaFormulario";

function ListaDeTarea() {
  const [tareas, setTareas] = useState([]);
  return (
    <>
      <TareaFormulario />
      <div className="tareas-lista-contenedor">
        Lista de tareas
              {
                  tareas.map((tarea) =>
                      <Tarea texto={tarea.texto } completada={tarea.completada} />)
        }
      </div>
    </>
  );
}
export default ListaDeTarea;
