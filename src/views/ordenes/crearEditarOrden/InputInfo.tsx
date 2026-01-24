import { useOrdenStore } from '../../../../globalContext/useOrdenStore'

type Props = {
  label: 'nombre' | 'telefono' | 'cedulaRnc'
}
export default function InputInfo({ label }: Props) {

  const inputValue = useOrdenStore(s => s.infoCliente)
  const setInput = useOrdenStore(s => s.setInfoCliente)
  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={label} className="font-semibold d:text-xl text-2xl mt-3" >{label.slice(0,1).toUpperCase() + label.slice(1)}</label>
      <input className='border border-[#B5BAC3] bg-[#F0F0F0] rounded-xl h-13 d:h-10 w-70 pl-4 font-semibold text-xl' id={label} type="text" value={inputValue[label]} onChange={(e) => setInput(label, e.target.value)} />
    </div>
  )
}
