
type Props = {
  label: string
  cantidad: number
  isSelected: boolean
  select: (status: string) => void
}


export default function FilterStatus({ label, cantidad, isSelected, select }: Props) {
  const color = label === 'Todos' ? ['#EEEAEA', '#535353'] :
    label === 'Pagado' ? ['#7BF1A8', '#00A63E'] :
      label === 'Abonado' ? ['#FFDF20', '#D08700'] :
        label === 'Sin Pagar' ? ['#FFA2A2', '#E7000B'] : ''
  return (
    <div onClick={() => select(label)}
      className="text-[#535353] flex gap-2 font-bold p-3 rounded-xl d:h-11 h-13 hover:bg-[#F0F0F0] text-xl d:text-xl cursor-pointer items-center justify-center" style={{ backgroundColor: isSelected ? '#F0F1F1' : '' }}>
      <p>{label}</p>
      <div className="p-1 rounded-xl px-3" style={{ backgroundColor: color[0], color: color[1] }}>{cantidad}</div>
    </div>
  )
}
