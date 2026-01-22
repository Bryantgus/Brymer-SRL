type Props = {
  img: string
  label: string
}
export default function InfoItem({img, label}: Props) {
    const estadoColor = label === 'Pagado' ? ['#00A63E', '#7BF1A8'] :
    label === 'Abonado' ? ['#D08700', '#FFDF20'] :
      label === 'Sin Pagar' ? ['#E7000B', '#FFA2A2'] : ''

      
  return (
    <div className="flex items-center gap-2">
      <img src={img} className="w-7 h-7 " alt={label} />
      <p className="text-xl font-semibold text-[#535353]" style={{color: estadoColor[0]}}>{label}</p>
    </div>
  )
}
