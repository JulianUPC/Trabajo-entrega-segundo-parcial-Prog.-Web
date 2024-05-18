import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import ReservarVuelos from "./ReservarVuelo";
import Asientos from "./Asientos";
import Destinos from "./Destinos";
import Requisitos from "./Requisitos";
import Navegador from "./Component/Navegador";
import SobreNostros from "./Component/SobreNosotros";
import PaginaNoEncontrada from "./Component/PaginaNoEncontrada";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navegador />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Inicio de Sesion" element={<Login />} />
          <Route path="/SobreNosotros" element={<SobreNostros />} />
          <Route element={<PrivateRoute />}>
            <Route path="/Fly Ease Menu" element={<Dashboard />} />
            <Route path="/Reservar Vuelo" element={<ReservarVuelos />} />
            <Route path="/Destinos" element={<Destinos />} />
            <Route path="/Asientos" element={<Asientos />} />
            <Route path="/Requisitos" element={<Requisitos />} />
            <Route path="*" element={<PaginaNoEncontrada />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}
export default App;
