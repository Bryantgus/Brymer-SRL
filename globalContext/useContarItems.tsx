import { useOrdenStore } from '../globalContext/useOrdenStore';

export const useContarItems = (producto: string) => {
  const data = useOrdenStore((s) => s[producto as keyof typeof s]);

  if (producto === 'ventana' && data && typeof data === 'object') {
    // Es vital el RETURN aquí para que el Hook devuelva el número
    return Object.values(data).reduce((acumulado: number, actual) => {
      if (Array.isArray(actual)) {
        return acumulado + actual.length;
      }
      return acumulado;
    }, 0);
  }

  // Si es otro producto que ya es un array (como 'puertas': [])
  if (Array.isArray(data)) {
    return data.length;
  }

  return 0; // Retorno por defecto si no hay coincidencia
};