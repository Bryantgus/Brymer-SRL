import { useOrdenStore } from "../../../globalContext/useOrdenStore";
import AgregarProductos from "./crearEditarOrden/AgregarProductos";
import InfoClient from "./crearEditarOrden/InfoClient";
import ProductEdit from "./crearEditarOrden/ProductEdit";

export default function CrearEditarOrden() {
  const currentProductEdit = useOrdenStore(s => s.currentProductEdit)

  return (
    <div className="p-5">
      {!currentProductEdit ?
        <>
          <h2 className="text-3xl font-semibold">Ordenes {'->'} Crear/Editar Orden</h2>
          <InfoClient />
          <AgregarProductos />
        </> :
        <ProductEdit />
      }
    </div>
  )
}
