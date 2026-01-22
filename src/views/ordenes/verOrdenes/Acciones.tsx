import watch from '../../../assets/view.png'
import edit from '../../../assets/edit.png'

type Props = {
  type: 'Ver' | 'Editar'
}

export default function Acciones({ type }: Props) {
  const img = type === 'Ver' ? watch : edit
  return (
    <div className='flex gap-3 items-center bg-[#F9F9F9] shadow-xl rounded-xl p-4 justify-center cursor-pointer'>
      <img src={img} className='w-5 h-5' alt={type} />
      <p className='font-semibold text-[20px] text-center'>{type}</p>
    </div>
  )
}
