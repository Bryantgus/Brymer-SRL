import { useState } from "react";
import BtnV from "./ventana/BtnV";
import VentanaItems from "./ventana/VentanaItems";
import { type VentanaObj } from "../../../../../globalContext/useOrdenStore";

export default function Ventana() {
  const [ventanaSelected, setVentanaSelected] = useState<keyof VentanaObj | null>(null)


  const setVentana = (label: keyof VentanaObj) => {
    setVentanaSelected(label)
  }
  return (
    <div>

      {!ventanaSelected ?
        <>
          <h3 className="text-5xl d:text-3xl font-semibold mb-5">Ventana</h3>
          <p className="font-semibold d:text-2xl text-3xl d mb-5">Selecciona el Tipo de Ventana</p>
          <div className="flex justify-between">
            <BtnV label={"p65"} action={setVentana} />
            <BtnV label={"tradicional"} action={setVentana} />
            <BtnV label={"p92"} action={setVentana} />

          </div>
        </> :
        <VentanaItems typo={ventanaSelected} volver={() => setVentanaSelected(null)} />
      }
    </div>
  )
}
