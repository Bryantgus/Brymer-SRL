import InfoItem from "./InfoItem"
import numeracion from '../../../assets/numeracion.png'
import user from '../../../assets/user.png'
import fechaImg from '../../../assets/fecha.png'
import dont from '../../../assets/wrong.png'
import done from '../../../assets/ok.png'
import wait from '../../../assets/wait.png'
import montoImg from '../../../assets/money.png'
import ver from '../../../assets/view.png'
import edit from '../../../assets/edit.png'

type Props = {
  id: number
  nombre: string
  fecha: Date
  estado: string
  monto: number
  ver_editar: (id: number, opcion: string) => void
}

export default function InfoOrden({ id, nombre, fecha, estado, monto }: Props) {
  console.log(fecha);
  const montoFormated = `DOP ${monto.toLocaleString()}.00`
  
  return (
    <div className="w-full bg-[#F9F9F9] shadow-xl rounded-xl flex p-5">
      <div className="w-25">
        <InfoItem img={numeracion} label={id.toString()} />
      </div>
      <div className="w-68">
        <InfoItem img={user} label={nombre} />
      </div>
      <div className="w-67">
        <InfoItem img={fechaImg} label={'5 de Septiembre 2026'} />
      </div>
      <div className="w-36">
        <InfoItem img={dont} label={estado} />
      </div>
      <div>
        <InfoItem img={montoImg} label={montoFormated} />
      </div>
    </div>
  )
}
