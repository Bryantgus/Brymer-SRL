import { useOrdenStore } from "../../../../globalContext/useOrdenStore";
import Puerta from "./productosEditar/Puerta";
import Ventana from "./productosEditar/Ventana";

const componentesMap = {
  Ventana: Ventana,
  Puerta: Puerta,
}
export default function ProductEdit() {
  const currentProductEdit = useOrdenStore(s => s.currentProductEdit)
  console.log(currentProductEdit);
  const ComponenteSeleccionado = componentesMap[currentProductEdit as keyof typeof componentesMap]
  
  return (
    <ComponenteSeleccionado />
  )
}
