import Modulo from './sidebar/modulo'
import inicio from '../assets/inicio.png'
import ordenes from '../assets/orden.png'
import produccion from '../assets/produccion.png'
import inventario from '../assets/inventario.png'
import { useOrdenStore } from '../../globalContext/useOrdenStore'
import { useLocation } from 'react-router-dom'

export default function SideBar() {
  const currentProductEdit = useOrdenStore(s => s.currentProductEdit)
  const location = useLocation();
  const quitCurrentProductEdit = useOrdenStore(s => s.quitCurrentProductEdit)
  // console.log(location.pathname, currentProductEdit);

  return (
    <div className='bg-[#E6EEF5] h-screen justify-center items-center'>
      <div className='text-center text-xl font-bold'>Panel de opciones</div>

      <div className='flex flex-col mt-3'>
        <Modulo title={'Inicio'} img={inicio} />
        <Modulo title={'Ordenes'} img={ordenes} />
        <Modulo title={'Produccion'} img={produccion} />
        <Modulo title={'Inventario'} img={inventario} />
        {currentProductEdit && location.pathname === '/ordenes/crear-editar-orden' &&
          <button onClick={quitCurrentProductEdit} 
          className='font-semibold  m-auto mt-3 bg-[#D4E2F0] hover:bg-[#c8ddf1] cursor-pointer border border-[#B3C3A3] p-2 rounded-xl'>Volver a Productos</button>
        }
      </div>

    </div>
  )
}
