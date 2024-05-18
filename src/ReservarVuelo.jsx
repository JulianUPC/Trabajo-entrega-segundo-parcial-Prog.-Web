import { useNavigate } from "react-router-dom";

const Reservar = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="title">
        <h1>Reservar Vuelos</h1>
      </div>
      <div className="Reserva">
        <label>
          <input type="radio" name="Seleccion" className="radioestilo" /> Ida
        </label>
        <label>
          <input type="radio" name="Seleccion" className="radioestilo" /> Ida /
          Vuelta
        </label>
        <br />
        <label>
          Origen <input type="text" className="input" /> |
        </label>
        <label>
          Destino <input type="text" className="input" />
        </label>
        <br />
        <label>
          Fecha Ida <input type="date" className="input" /> |
        </label>
        <label>
          Fecha de Vuelta <input type="date" className="input" />
        </label>
      </div>
      <button className="btn">Reservar Vuelo</button>
      <br />
      <button className="btn" onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
};

export default Reservar;
