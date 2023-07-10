import react, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";

function ListaDeTarea() {
    const [tareas, setTareas] = useState([]);
    

    // queremos que cuando hacemos click en button agregar tareas podemos agregar la tarea que ha escrito el usario a la lista de tareas 
    const agregarTarea = tarea => {
        console.log("tarea agregada")
        console.log(tarea)
    }





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
