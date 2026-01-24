import { useContarItems } from '../../../../globalContext/useContarItems'
type Props = {
  label: string
  width: string | number
  action: (label: string) => void
}

export default function Btn({ label, action, width }: Props) {
  // Usamos el hook pasando el label (en minúsculas para coincidir con el store)
  const cantidad = useContarItems(label.toLowerCase());

  return (
    <div
      onClick={() => action(label)}
      className="w-50 text-center bg-[#E6EEF5] inline-block rounded-xl p-3 font-semibold text-xl border border-[#D4E2F0] cursor-pointer d:p-2"
      style={{ width }}
    >
      {/* Renderizado limpio usando Template Literals */}
      <p>{`${label} (${cantidad})`}</p>
    </div>
  )
}