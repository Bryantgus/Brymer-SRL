import { useOrdenStore } from "../../../../globalContext/useOrdenStore"

type Props = {
  img: string
  label: string
  close: () => void
}
export default function Product({ img, label, close }: Props) {
  const setProduct = useOrdenStore(s => s.setProductos)

  return (
    <div onClick={() => {setProduct(label); close()} }
      className="flex flex-col items-center justify-center border p-2 rounded-xl border-[#B5BAC3] cursor-pointer">
      <img src={img} className="w-20 h-20" alt={label} />
      <p className="font-semibold text-xl">{label}</p>
    </div>
  )
}
