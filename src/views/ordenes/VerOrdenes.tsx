import Filters from "./verOrdenes/Filters";
import InfoOrden from "./verOrdenes/InfoOrden";

export default function VerOrdenes() {

  const ver_editar = (id: number, opcion: string) => {
    console.log(id, opcion);
  }

  return (

    <div className="p-5">
      <h2 className="text-4xl font-semibold">Ordenes {'->'} Ver Ordenes</h2>

      <Filters />
      <div className="mt-3"></div>
      <div className="flex flex-col gap-5 overflow-auto h-110 d:h-98">

        <InfoOrden id={0} nombre={"Bryant Tejeda Florimon"} fecha={new Date()} estado={"Sin Pagar"} monto={10} ver_editar={ver_editar} />
        <InfoOrden id={0} nombre={"Bryant Tejeda Florimon"} fecha={new Date()} estado={"Sin Pagar"} monto={10} ver_editar={ver_editar} />
        <InfoOrden id={0} nombre={"Bryant Tejeda Florimon"} fecha={new Date()} estado={"Sin Pagar"} monto={10} ver_editar={ver_editar} />
        <InfoOrden id={0} nombre={"Bryant Tejeda Florimon"} fecha={new Date()} estado={"Sin Pagar"} monto={10} ver_editar={ver_editar} />
        <InfoOrden id={0} nombre={"Bryant Tejeda Florimon"} fecha={new Date()} estado={"Sin Pagar"} monto={10} ver_editar={ver_editar} />
        <InfoOrden id={0} nombre={"Bryant Tejeda Florimon"} fecha={new Date()} estado={"Sin Pagar"} monto={10} ver_editar={ver_editar} />
        <InfoOrden id={0} nombre={"Bryant Tejeda Florimon"} fecha={new Date()} estado={"Sin Pagar"} monto={10} ver_editar={ver_editar} />
        <InfoOrden id={0} nombre={"Bryant Tejeda Florimon"} fecha={new Date()} estado={"Sin Pagar"} monto={10} ver_editar={ver_editar} />
        

      </div>
    </div>
  )
}
