export type EstadoOrden = "Sin Pagar" | "Abonado" | "Pagado"

export type verOrdenesType = {
  id: number
  nombre: string
  fecha: Date
  estado: string
  monto: number
}