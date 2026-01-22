type Props = {
  img: string
  label: string
}
export default function InfoItem({img, label}: Props) {
  return (
    <div className="flex items-center gap-1">
      <img src={img} className="w-7 h-7" alt={label} />
      <p className="text-xl font-semibold text-[#535353]">{label}</p>
    </div>
  )
}
