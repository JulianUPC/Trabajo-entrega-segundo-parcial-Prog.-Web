import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="nav-items container">
          <div className="logo">
            <h1>Fly Ease</h1>
          </div>
          <ul>
            <li>
              <NavLink to={"/SobreNosotros"}>Sobre Nosotros</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
