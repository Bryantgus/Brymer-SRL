import useFilter from "../../../../globalContext/useFilter"
import FilterStatus from "./FilterStatus"


export default function Filters() {
  const busqueda = useFilter(s => s.busqueda)
  const setBusqueda = useFilter(s => s.setBusqueda)
  
  return (
    <div>
      <div className="mt-5 flex justify-between">
        <input 
        type="text" 
        value={busqueda}
        placeholder="Nombre o Numero de Orden" 
        onChange={(e) => setBusqueda(e.target.value)}
          className="w-80 d:h-11 h-13 rounded-md bg-[#F8F8F8] border-2 border-[#D4E2F0] pl-3 text-xl font-semibold" />
        <div className="flex gap-3">
          <FilterStatus label={"Todos"} cantidad={10} />
          <FilterStatus label={"Pagado"} cantidad={10} />
          <FilterStatus label={"Abonado"} cantidad={10} />
          <FilterStatus label={"Sin Pagar"} cantidad={10} />
        </div>
      </div>


    </div>
  )
}
