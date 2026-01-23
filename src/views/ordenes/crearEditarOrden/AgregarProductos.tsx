import { useState } from 'react'
import Btn from './Btn'
import { useOrdenStore } from '../../../../globalContext/useOrdenStore'
import Modal from '../../../components/Modal'
import Products from './Products'

export default function AgregarProductos() {
  const setCurrentProductEddit = useOrdenStore(s => s.setCurrentProductEdit)
  const productosAgregados = useOrdenStore(s => s.productosAgregados)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className='flex flex-col gap-3'>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <Products close={() => {
            setIsModalOpen(false)
          }} />
        </Modal>
      )}

      <h3 className="font-semibold text-3xl d:text-2xl mt-3">Agregar Productos</h3>

      <div className='border w-full h-90 rounded-xl border-[#D4E2F0] flex flex-col items-center p-3'>
        <Btn label='Agregar Nuevo Producto' action={() => setIsModalOpen(true)} width={400} />

        <div className='flex flex-col items-start w-full mt-4'>
          <h4 className="font-semibold text-2xl">Productos Agregados</h4>

          {/* CONTENEDOR CON SCROLL */}
          <div className='w-full h-60 overflow-y-auto mt-3 pr-2 custom-scroll'>
            <div className='grid grid-cols-[auto_auto_auto_auto] gap-3 w-full'>
              {productosAgregados.map((it, index) => (
                <div key={index} className="flex justify-center items-center">
                  <Btn label={it} action={() => setCurrentProductEddit(it)} width={260}/>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
