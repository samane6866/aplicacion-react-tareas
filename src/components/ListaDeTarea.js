import react, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import Tarea from "./Tarea";

function ListaDeTarea() {
    const [tareas, setTareas] = useState([]);
    

    // queremos que cuando hacemos click en button agregar tareas podemos agregar la tarea que ha escrito el usario a la lista de tareas 
  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
        tarea.texto=tarea.texto.trim()
      }

        // para actulizar las tareas nuevas que aprecen en primera de la lista
    const tareaActualizadas = [tarea, ...tareas]
    setTareas(tareaActualizadas)
    
    }
  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        Lista de tareas
              {
                  tareas.map((tarea) =>
                      <Tarea key={tarea.id} id={tarea.id} texto={tarea.texto } completada={tarea.completada} />)
        }
      </div>
    </>
  );
}
export default ListaDeTarea;
