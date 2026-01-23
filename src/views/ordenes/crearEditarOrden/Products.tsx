import Product from "./Product"
import ventana from '../../../assets/products/ventana.png'
import puerta from '../../../assets/products/puerta.png'
import closet from '../../../assets/products/closet.png'
import fregadero from '../../../assets/products/fregadero.png'
import mampara from '../../../assets/products/mampara.png'
import pañoFijo from '../../../assets/products/panoFijo.png'
import proyectada from '../../../assets/products/proyectada.png'
import gabinete from '../../../assets/products/gabinete.png'
import { useOrdenStore } from "../../../../globalContext/useOrdenStore"

const products = [
  { label: 'Ventana', img: ventana },
  { label: 'Closet', img: closet },
  { label: 'Puerta', img: puerta },
  { label: 'Fregadero', img: fregadero },
  { label: 'Mampara', img: mampara },
  { label: 'Paño Fijo', img: pañoFijo },
  { label: 'Proyectada', img: proyectada },
  { label: 'Gabinete', img: gabinete }
]
type Props = {
  close: () => void
}

export default function Products({ close }: Props) {
  const productosAgregados = useOrdenStore(s => s.productosAgregados)
  const productosFiltro = products.filter(p => !productosAgregados.includes(p.label));
  return (
    <div className="d:w-200 w-200 h-95">
      <h4 className="font-semibold text-2xl">Seleccionar Producto</h4>

      <div className="grid grid-cols-[auto_auto_auto_auto] grid-rows-[auto_auto] gap-y-10 gap-x-10 mt-5">
        {productosFiltro.map((it, index) => {
          return (
            <Product key={index} img={it.img} label={it.label} close={close} />
          )
        })}
      </div>

      <div onClick={close} className="cursor-pointer text-3xl text-center mt-5 font-bold">Cerrar</div>

    </div>
  )
}
