import { useAuth } from "./AuthProvider";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const auth = useAuth();
  return (
    <div>
      <div className="container">
        <h1>Bienvenido a Fly Ease / {auth.user}</h1>
        <Link to="/Reservar Vuelo">
          <div className="btn">Reservar Vuelos</div>
        </Link>
        <Link to="/Destinos">
          <div className="btn">Destinos</div>
        </Link>
      </div>
      <div className="container">
        <Link to="/Requisitos">
          <div className="btn">Requisitos</div>
        </Link>
        <Link to="/Asientos">
          <div className="btn">Asientos</div>
        </Link>
      </div>
      <p>
        <div className="container">
          <button onClick={() => auth.logOut()} className="btn">
            Cerrar sesión
          </button>
        </div>
      </p>
    </div>
  );
};
export default Dashboard;
