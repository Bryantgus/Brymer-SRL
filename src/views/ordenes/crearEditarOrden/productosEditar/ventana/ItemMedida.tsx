import { useOrdenStore } from "../../../../../../globalContext/useOrdenStore";
import InputMedida from "./InputMedida";
type Props = {
  id: number
}
export default function ItemMedida({ id }: Props) {
  const updateVentana = useOrdenStore(s => s.updateVentana)

  const setInput = (label, input: string) => { 
    updateVentana()
  }
  return (
    <div className="inline-block border-[#a3bed8] rounded-xl border-2">
      <InputMedida label={"Etiqueta"} input={""} changeInput={setInput} />
      <div className="flex">
        <InputMedida label={"Ancho"} input={""} changeInput={setInput} />
        <InputMedida label={"Alto"} input={""} changeInput={setInput} />
      </div>

    </div>
  )
}
