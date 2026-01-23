import { create } from 'zustand'
import type { Ventana } from '../utils/types/productos'

export interface InfoCliente {
  nombre: string
  telefono: number
  cedulaRnc: number
}

interface VentanaObj {
  p65?: Ventana[]
  trad?: Ventana[]
  p92?: Ventana[]
}
export interface Orden {
  infoCliente: InfoCliente
  setInfoCliente: (label: string, value: string) => void
  currentProductEdit: string | null
  setCurrentProductEdit: (product: string) => void
  quitCurrentProductEdit: () => void
  productosAgregados: string[]
  setProductos: (label: string) => void
  ventanas: VentanaObj
  setVentana: (tipo: keyof VentanaObj, data: Ventana) => void
  updateVentana: (tipo: keyof VentanaObj, id: number, newData: Partial<Ventana>) => void
}

export const useOrdenStore = create<Orden>((set) => ({
  infoCliente: { nombre: '', telefono: 0, cedulaRnc: 0 },
  productosAgregados: ['Ventana'],
  ventanas: {
    p65: [],
    trad: [],
    p92: []
  },
  currentProductEdit: null,

  setCurrentProductEdit: (product) =>
    set(() => ({
      currentProductEdit: product
    })),

  quitCurrentProductEdit: () =>
    set(() => ({
      currentProductEdit: null
    })),

  setProductos: (label) => {
    set((state) => ({
      productosAgregados: [label, ...state.productosAgregados]
    }))
  },

  setInfoCliente: (key, value) => set((state) => ({
    infoCliente: {
      ...state.infoCliente, 
      [key]: value         
    }
  })),
  updateVentana: (tipo, id, newData) =>
    set((state) => ({
      ventanas: {
        ...state.ventanas,
        [tipo]: state.ventanas[tipo]?.map((v) =>
          v.id === id ? { ...v, ...newData } : v
        )
      }
    })),

  setVentana: (tipo, data) =>
    set((state) => ({
      ventanas: {
        ...state.ventanas,
        [tipo]: [...(state.ventanas[tipo] || []), data]
      }
    }))
}))