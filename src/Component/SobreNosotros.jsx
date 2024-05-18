import { useNavigate } from "react-router-dom";
import Logo from "../Assets/Logo Ease.png";

const SobreNosotros = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="title">
        <h1>Sobre Nosotros</h1>
      </div>
      <div className="Logo">
        <img src={Logo} alt="Logo de Ease" />
      </div>
      <div className="about-container">
        <h2>
          <p>
            Fly Ease redefine la experiencia de volar, priorizando el confort y
            la satisfacción de nuestros pasajeros. Con asientos ergonómicos, un
            servicio al cliente excepcional y tecnología avanzada, garantizamos
            un vuelo relajante y placentero. Nuestra moderna flota y equipo
            profesional están dedicados a hacer de cada viaje una experiencia
            inolvidable.
          </p>
        </h2>
      </div>
      <button className="btn" onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
};

export default SobreNosotros;
