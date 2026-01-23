type Props = {
  label: string
  id: number
}

export default function InputMedida({id, label}: Props) {
  return (
    <div className="">
      <p className="font-semibold">{label}</p>
      <input type="text" className="" />
    </div>
  )
}
