import React from 'react'
import Modulo from './sidebar/modulo'
import inicio from '../assets/inicio.png'
import ordenes from '../assets/orden.png'
import produccion from '../assets/produccion.png'
import inventario from '../assets/inventario.png'

export default function SideBar() {
  return (
    <div className='bg-[#E6EEF5] h-screen justify-center items-center'>
      <div className='text-center text-xl font-bold'>Panel de opciones</div>

      <div className='flex flex-col mt-3'>
        <Modulo title={'Inicio'} img={inicio} />
        <Modulo title={'Ordenes'} img={ordenes} />
        <Modulo title={'Produccion'} img={produccion} />
        <Modulo title={'Inventario'} img={inventario} />
      </div>
    </div>
  )
}
