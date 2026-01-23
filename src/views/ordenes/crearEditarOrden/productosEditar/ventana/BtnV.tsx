type Props = {
  label: string
  action: (label: string) => void
}
export default function BtnV({label, action}: Props) {
  return (
    <div  onClick={() => action(label)}
    className="text-3xl font-bold bg-[#e6eef5] inline-block p-5 rounded-xl px-30 cursor-pointer hover:bg-[#c8ddf1]">
          <p>{label}</p>
        </div>
  )
}
