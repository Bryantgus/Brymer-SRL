import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
// import useScreenDimensions from '../../utils/useScreenDimensions'

export default function DashboardLayout() {
  // const { width, height } = useScreenDimensions();
  return (
    <div className="flex flex-col h-screen w-full">
      {/* <div>
        <p className="font-bold text-[100px] d:text-[20px]">
          Ancho: {width}px
        </p>
        <p>Alto: {height}px</p>
      </div> */}
      {/* Contenedor del Header con altura fija */}
      <header className="h-24 bg-[#E6EEF5] flex items-center p-3 justify-between">
        <Header />
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-[8%] d:w-[10%]">
          <SideBar />
        </aside>

        <main className="flex-1 overflow-y-auto bg-gray-50 text-black">
          <Outlet />
        </main>
      </div>
    </div>
  );
}