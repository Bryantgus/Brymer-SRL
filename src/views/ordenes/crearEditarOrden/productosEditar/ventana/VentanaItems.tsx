import { useEffect } from "react"
import { useOrdenStore, type VentanaObj } from "../../../../../../globalContext/useOrdenStore"
import ItemMedida from "./ItemMedida"

type Props = {
  typo: keyof VentanaObj
  volver: () => void
}

export default function VentanaItems({ typo, volver }: Props) {
  const ventanaSelected = useOrdenStore(s => s.ventanas[typo as keyof typeof s.ventanas])
  const agregarVentana = useOrdenStore(s => s.setVentana)


  useEffect(() => {
    // Si la lista existe y está vacía, agregamos el primer item
    if (ventanaSelected && ventanaSelected.length === 0) {
      agregarVentana(typo, {
        etiqueta: '1',
        id: 1,
        ancho: '',
        alto: '',
        caracteristicas: {
          perfil: '',
          cristal: '',
          perfilColor: '',
          screen: false,
          francesada: false
        }
      });
    }
  }, [ventanaSelected, typo, agregarVentana]);


  return (
    <div>
      <button onClick={volver}
        className="font-semibold  bg-[#D4E2F0] hover:bg-[#c8ddf1] text-[#535353] cursor-pointer border border-[#B3C3A3] p-1 rounded-xl">Volver a Ventanas</button>

      <h4 className="mt-4 font-semibold d:text-3xl text-4xl mb-2">{typo.charAt(0).toUpperCase() + typo.slice(1) + " (" + (ventanaSelected?.length ?? 0) + ")"}</h4>
      <div className="overflow-y-auto h-120 d:h-105 p-2 border border-[#677b8f] rounded-xl">

        <div className="grid gap-5 grid-cols-[auto_auto_auto_auto] justify-center">
          {ventanaSelected?.map((it) => {
            return (
              <ItemMedida key={it.id} id={it.id} />
            )
          })}

          {/* <ItemMedida id={2} />
          <ItemMedida id={3} /> */}

        </div>
      </div>
    </div>
  )

}