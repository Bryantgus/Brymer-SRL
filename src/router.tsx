import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Resumen from "./views/Inicio/Resumen";
import VerOrdenes from "./views/ordenes/VerOrdenes";
import CrearEditarOrden from "./views/ordenes/CrearEditarOrden";
import VistaDeOrden from "./views/ordenes/VistaDeOrden";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/ordenes/ver-ordenes" replace />} />
        <Route element={<MainLayout />}>
          
          <Route path="inicio">
            <Route path="resumen" element={<Resumen />} />
          </Route>

          <Route path="ordenes">
            <Route path="ver-ordenes" element={<VerOrdenes />} />
            <Route path="crear-editar-orden" element={<CrearEditarOrden />} />
            <Route path="vista-orden" element={<VistaDeOrden />} />
          </Route>

        </Route>

        <Route path="*" element={<h1>404 - No encontrado</h1>} />
      </Routes>
    </BrowserRouter>
  );
}