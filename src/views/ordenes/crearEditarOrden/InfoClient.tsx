import InputInfo from "./InputInfo";

export default function InfoClient() {

  return (
    <div>
      <h3 className="font-semibold text-2xl d:text-xl mt-3">Información del Cliente</h3>

      <div className="flex items-start gap-25"> 
        <InputInfo label={"nombre"} />
        <InputInfo label={"telefono"} />
        <InputInfo label={"cedulaRnc"} />
      </div>

      
    </div>
  )
}
