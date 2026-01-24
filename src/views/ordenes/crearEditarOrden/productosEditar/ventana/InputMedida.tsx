type Props = {
  label: string
  input: string
  changeInput: (label: string, input: string) =>  void
}

export default function InputMedida({label, input, changeInput}: Props) {
  
  return (
    <div className="rounded-xl p-2 mt-2">
      <p className="font-semibold">{label}</p>
      <input 
      onChange={() => changeInput(label, input)}
      value={input} 
      type={label === 'Etiqueta' ? 'text' : 'number'} 
      className="text-center font-semibold text-xl border-2 border-[#D4E2F0] rounded-xl w-30 h-10" />
    </div>
  )
}
