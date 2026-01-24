type VentanaCaracteristicas = {
  perfil: string
  cristal: string
  perfilColor: string
  screen: boolean
  francesada: boolean
}

export type Ventana = {
  id: number
  etiqueta: string
  ancho: string
  alto: string
  caracteristicas: VentanaCaracteristicas
}