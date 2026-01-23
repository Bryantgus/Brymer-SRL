import { useState } from "react";
import BtnV from "./ventana/BtnV";
import VentanaItems from "./ventana/VentanaItems";

export default function Ventana() {

  const [ventanaSelected, setVentanaSelected] = useState<string | null>(null)
  const setVentana = (label: string) => {
    setVentanaSelected(label)
  }
  return (
    <div>

      {!ventanaSelected ?
        <>
          <h3 className="text-5xl d:text-3xl font-semibold mb-5">Ventana</h3>
          <p className="font-semibold d:text-2xl text-3xl d mb-5">Selecciona el Tipo de Ventana</p>
          <div className="flex justify-between">
            <BtnV label={"P65"} action={setVentana} />
            <BtnV label={"Tradicional"} action={setVentana}/>
            <BtnV label={"P92"} action={setVentana}/>

          </div>
        </> :
        <VentanaItems typo={ventanaSelected} volver={() => setVentanaSelected(null)}/>
      }
    </div>
  )
}
