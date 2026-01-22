
type Props = {
  title: string
  img: string
}

export default function modulo({ img, title }: Props) {
  return ( 
    <div className="flex flex-col items-center gap-3 cursor-pointer hover:bg-[#D4E2F0] rounded-xl p-2">
      <img src={img} alt={title} className="w-12 h-12" />
      <span className="text-xl font-semibold">{title}</span>
    </div>
  )
}
