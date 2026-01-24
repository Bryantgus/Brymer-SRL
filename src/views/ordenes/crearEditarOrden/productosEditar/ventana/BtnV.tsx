import { useOrdenStore, type VentanaObj } from "../../../../../../globalContext/useOrdenStore"

type Props = {
  label: keyof VentanaObj
  action: (label: keyof VentanaObj) => void
}
export default function BtnV({ label, action }: Props) {
  const ventanaCantidad = useOrdenStore(s => s.ventanas[label]?.length)
  return (
    <div onClick={() => action(label)}
      className="text-3xl font-semibold bg-[#e6eef5] inline-block p-5 rounded-xl px-30 cursor-pointer hover:bg-[#c8ddf1]">
      <p>{label.slice(0, 1).toUpperCase() + label.slice(1,) + " (" + ventanaCantidad + ")"}</p>
    </div>
  )
}
