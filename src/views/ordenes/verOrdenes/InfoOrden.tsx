import InfoItem from "./InfoItem"
import numeracion from '../../../assets/numeracion.png'
import user from '../../../assets/user.png'
import fechaImg from '../../../assets/fecha.png'
import dont from '../../../assets/wrong.png'
import done from '../../../assets/ok.png'
import wait from '../../../assets/wait.png'
import montoImg from '../../../assets/money.png'
import Acciones from "./Acciones"
import { fechaEnTexto } from "../../../../utils/fechaEnTexto";

type Props = {
  id: number
  nombre: string
  fecha: Date
  estado: string
  monto: number
  ver_editar: (id: number, opcion: string) => void
}

export default function InfoOrden({ id, nombre, fecha, estado, monto }: Props) {
  const montoFormated = `DOP ${monto.toLocaleString()}.00`
  const fechaFormated = fechaEnTexto(fecha)
  const imgStatus = estado === 'Pagado' ? done : 
  estado === 'Sin Pagar' ? dont : 
  estado === 'Abonado' ? wait : ''
  return (
    <div>

      <div className="w-full bg-[#F9F9F9] shadow-xl rounded-xl flex p-5 items-center">
        <div className="w-25">
          <InfoItem img={numeracion} label={id.toString()} />
        </div>
        <div className="w-68">
          <InfoItem img={user} label={nombre} />
        </div>
        <div className="w-67">
          <InfoItem img={fechaImg} label={fechaFormated} />
        </div>
        <div className="w-36">
          <InfoItem img={imgStatus} label={estado} />
        </div>
        <div className="d:w-50 w-50">
          <InfoItem img={montoImg} label={montoFormated} />
        </div>
        <div className="flex items-center justify-center gap-4">
          <Acciones type={"Ver"} />
          <Acciones type={"Editar"} />
        </div>
      </div>
    </div>
  )
}