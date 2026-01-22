import { log } from "console";
import FilterStatus from "./filterStatus";
import InfoOrden from "./InfoOrden";

export default function Filters() {

  const setFilter = (status: string) => {
    console.log(status);
  }

  return (
    <div>

      <div className="mt-5 flex justify-between">
        <input type="text" placeholder="Nombre o Numero de Orden"
          className="w-80 d:h-11 h-13 rounded-md bg-[#F8F8F8] border-2 border-[#D4E2F0] pl-3 text-xl font-semibold" />
        <div className="flex gap-3">
          <FilterStatus label={"Todos"} cantidad={10} isSelected={true} select={setFilter} />
          <FilterStatus label={"Pagado"} cantidad={10} isSelected={false} select={setFilter} />
          <FilterStatus label={"Abonado"} cantidad={10} isSelected={false} select={setFilter} />
          <FilterStatus label={"Sin Pagar"} cantidad={10} isSelected={false} select={setFilter} />
        </div>
      </div>

      
    </div>
  )
}
