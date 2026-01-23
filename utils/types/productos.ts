type VentanaCaracteristicas = {
  perfil: string
  cristal: string
  perfilColor: string
  screen: boolean
  francesada: boolean
}

export type Ventana = {
  id: number
  ancho: string
  alto: string
  caracteristicas: VentanaCaracteristicas
}