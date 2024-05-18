import { useNavigate } from "react-router-dom";
import AsientoEconomico from "./Assets/Economico.jpg";
import AsientoPlus from "./Assets/Plus.jpg";
import AsientoPremium from "./Assets/Premium.png";
const Asientos = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="title">
        <h1>Asientos</h1>
        <div className="Asientotitulos">
          <h2>Asientos Economicos</h2>
        </div>
        <div className="Imagen">
          <img src={AsientoEconomico} alt="Asiento Economico" />
        </div>
        <div className="Contenido">
          <li>
            Siéntate en las 3 primeras filas del avión. Disfruta de más espacio
            y mayor reclinación.
          </li>
        </div>
        <div className="Asientotitulos">
          <h2>Asientos Plus</h2>
        </div>
        <div className="Imagen">
          <img src={AsientoPlus} alt="Asiento Plus" />
        </div>
        <div className="Contenido">
          <li>
            Disfruta de mayor espacio, apoyacabezas ajustables y reclinación.
          </li>
        </div>
        <div className="Asientotitulos">
          <h2>Asientos Premium</h2>
        </div>
        <div className="Imagen">
          <img src={AsientoPremium} alt="Asiento Premium" />
        </div>
        <div className="Contenido">
          <li>
            Son la opción más comoda. Están ubicados en las filas posteriores
            del avión y cuentan con camas para una experiencia Premium.
          </li>
        </div>
      </div>
      <button className="btn" onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
};

export default Asientos;
