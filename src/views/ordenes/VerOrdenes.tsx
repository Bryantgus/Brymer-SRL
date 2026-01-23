import Filters from "./verOrdenes/Filters";
import InfoOrden from "./verOrdenes/InfoOrden";
import type { verOrdenesType } from '../../../utils/types/Ordenes'
import useFilter from "../../../globalContext/useFilter";
import { useMemo } from "react";

export default function VerOrdenes() {
  const allOrdenes = useFilter(s => s.verOrdenes);
  const busqueda = useFilter(s => s.busqueda);
  const estado = useFilter(s => s.estado);

  const ordenesFiltradas = useMemo(() => {
    return allOrdenes.filter((orden) => {
      const coincideNombre = orden.nombre.toLowerCase().includes(busqueda.toLowerCase());
      const coincideEstado = estado === "Todos" || orden.estado === estado;
      return coincideNombre && coincideEstado;
    });
  }, [allOrdenes, busqueda, estado]);

  const ver_editar = (id: number, opcion: string) => {
    console.log(id, opcion);
    return
  }
  return (

    <div className="p-5">
      <h2 className="text-3xl font-semibold">Ordenes {'->'} Ver Ordenes</h2>

      <Filters />
      <div className="mt-3"></div>
      <div className="flex flex-col gap-5 overflow-auto h-110 d:h-98 2xl:h-170">
        {ordenesFiltradas.map((it: verOrdenesType) => {
          return (
            <InfoOrden
              key={it.id}
              id={it.id}
              nombre={it.nombre}
              fecha={it.fecha}
              estado={it.estado}
              monto={it.monto}
              ver_editar={ver_editar} />
          )
        })}

      </div>
    </div>
  )
}
