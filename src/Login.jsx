import { useState } from "react";
import { useAuth } from "./AuthProvider";
const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [mensaje, setMensaje] = useState("");
  const auth = useAuth();
  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      try {
        auth.loginAction(input);
      } catch (error) {
        setMensaje(error.message);
      }
      return;
    }
    alert("El usuario y la contraseña es obligatorio");
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="container">
        <div className="Login">Usuario</div>
        <form onSubmit={handleSubmitEvent}>
          <div className="form_control">
            <br />
            <label htmlFor="user-name"></label>
            <input
              type="text"
              className="Input_Login"
              id="user-name"
              name="username"
              aria-describedby="user-name"
              aria-invalid="false"
              onChange={handleInput}
            />
          </div>
          <br />
          <div className="Login">Contraseña</div>
          <div className="form_control">
            <label htmlFor="password"></label>
            <input
              type="password"
              className="Input_Login"
              id="password"
              name="password"
              aria-describedby="user-password"
              aria-invalid="false"
              onChange={handleInput}
            />
          </div>
          <br />
          <button className="Iniciar_Boton">Iniciar sesión</button>
          <br />
          <div style={{ color: "red" }} className="Error">
            {mensaje}
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
