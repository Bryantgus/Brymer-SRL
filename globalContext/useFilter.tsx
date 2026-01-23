import { create } from 'zustand'
import type { verOrdenesType } from '../utils/types/Ordenes'
import { verOrdenes } from '../utils/mockData/verOrdenes'

interface Filter {
  verOrdenes: verOrdenesType[]
  busqueda: string
  estado: string
  setBusqueda: (label: string) => void
  setEstado: (label: string) => void

}

const useFilter = create<Filter>((set) => ({
  verOrdenes: verOrdenes,
  busqueda: '',
  estado: 'Todos',

  setBusqueda: (label) => {
    set(() => ({
      busqueda: label
    }))
  },

  setEstado: (label) => {
    set(() => ({
      estado: label
    }))
  },

  

}))

export default useFilter;