import { useNavigate } from "react-router-dom";
import check from "./Assets/check.png";

const Requisitos = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="title">
        <h1>Requisitos</h1>
        <div className="Subtitles">
          <h2>Vuelos Nacionales</h2>
          <div className="text">
            <img src={check} alt="" />
            Documento de identidad nacional vigente.
            <br />
            <img src={check} alt="" />
            Documento de identidad nacional vigente.
            <br />
            <br />
            <div className="Sinespacio">
              En caso de pérdida documento nacional, se acepta:
            </div>
            <br />
            <img src={check} alt="" />
            Pasaporte.
            <br />
            <img src={check} alt="" />
            Licencia de conducción.
            <br />
            <div className="Sinespacio">
              <img src={check} alt="" />
              Libreta militar o tarjeta de identificación de una institución del
              estado.{" "}
            </div>
          </div>
          <h2>Vuelos Internacionales</h2>
          <div className="text">
            <img src={check} alt="" />
            Visa de Turismo
            <li>Formato: Papel</li>
            <li>Periodo de Validez: 10 años</li>
            <img src={check} alt="" />
            Pasaporte
            <li>
              Fecha de Caducidad: debe ser válido durante el período previsto de
              estancia
            </li>
          </div>
          <h2>Volar Con Niños y bebes</h2>
          <div className="text">
            <p>
              Los menores de 2 años (hasta 24 meses y 0 días) son considerados
              bebés. Si el bebé cumple 2 años antes o durante la fecha de
              retorno del viaje,su tiquete será cambiado a uno de niño (para
              edades de 2 a 11 años).
            </p>
            Este cambio tiene un costo adicional debido a que los niños en este
            rango de edad están sujetos a una tarifa diferente. ​
          </div>
          <h2>Volar con Macotas</h2>
          <div className="text">
            <div className="Sinespacio">
              podrás volar con tu mascota siempre y cuando cumplas con los
              requisitos de transporte. Ten presente que transportamos tres
              clases de animales de compañía:
              <br />
              <br />
              <img src={check} alt="" />
              <strong>Mascota:</strong>
              aceptamos perros y gatos mayores de 4 meses de edad.
              <br />
              <br />
              <img src={check} alt="" />
              <strong>Perros de soporte emocional:</strong>
              deberás presentar un certificado médico emitido por un profesional
              de la salud mental que demuestre tu condición para volar con tu
              mascota.
              <br />
              <br />
              <img src={check} alt="" />
              <strong>Perros de servicio:</strong>
              Entrenados para trabajar o realizar tareas en beneficio de una
              persona calificada con una discapacidad.
            </div>
          </div>
        </div>
      </div>
      <button className="btn" onClick={() => navigate(-1)}>
        Volver
      </button>
    </div>
  );
};

export default Requisitos;
