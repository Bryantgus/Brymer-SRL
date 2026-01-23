import ItemMedida from "./ItemMedida"

type Props = {
  typo: string
  volver: () => void
}

export default function VentanaItems({ typo, volver }: Props) {
  return (
    <div>
      <button onClick={volver} 
      className="font-semibold  bg-[#D4E2F0] hover:bg-[#c8ddf1] text-xl cursor-pointer border border-[#B3C3A3] p-2 rounded-xl">Volver a Ventanas</button>

      <h4 className="mt-4 font-semibold d:text-3xl text-4xl">{typo}</h4>

      <div>
        <ItemMedida />
      </div>
    </div>
  )

}