import { useNavigate } from "react-router-dom";
import Destino1 from "./ImagenesDestinos/Paisaje1.jpg";
import Destino2 from "./ImagenesDestinos/Paisaje2.jpg";
import Destino3 from "./ImagenesDestinos/Paisaje3.jpg";
import Destino4 from "./ImagenesDestinos/Paisaje4.jpg";
import Destino5 from "./ImagenesDestinos/Paisaje5.jpg";
import Destino6 from "./ImagenesDestinos/Paisaje6.jpg";

const Destinos = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="title">
        <h1>Destinos</h1>
      </div>
      <div className="Destinos">
        Cañon de Colca (Peru)
        <img src={Destino1} alt="Foto Destino" />
      </div>
      <div className="Destinos">
        San Andres Islas (Colombia)
        <img src={Destino2} alt="Foto Destino" />
      </div>
      <div className="Destinos">
        Laguna Colorada (Bolivia)
        <img src={Destino3} alt="Foto Destino" />
      </div>
      <div className="Destinos">
        Glaciar Perito Moreno (Argentina)
        <img src={Destino4} alt="Foto Destino" />
      </div>
      <div className="Destinos">
        Reserva marina de Galápagos (Islas Galapagos)
        <img src={Destino5} alt="Foto Destino" />
      </div>
      <div className="Destinos">
        Machu Picchu (Peru)
        <img src={Destino6} alt="Foto Destino" />
      </div>
      <button className="btn" onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
};

export default Destinos;
