import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./herder.css";

const Header = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  return (
    <header className="header">
      <div className="logo">
        <img src="./img/verde.png" alt="Logo" />
      </div>
      <nav className="nav">
        <Link 
          to="/" 
          className={active === "/" ? "active" : ""} 
          onClick={() => setActive("/")}
        >
          HOME
        </Link>
        <Link 
          to="/let" 
          className={active === "/let" ? "active" : ""} 
          onClick={() => setActive("/let")}
        >
          LET
        </Link>
        <Link 
          to="/equipe" 
          className={active === "/equipe" ? "active" : ""} 
          onClick={() => setActive("/equipe")}
        >
          EQUIPE
        </Link>
        <Link 
          to="/Servico3D" 
          className={active === "/Servico3D" ? "active" : ""} 
          onClick={() => setActive("/Servico3D")}
        >
          SERVIÇO
        </Link>
        <Link 
          to="/contact" 
          className={active === "/contact" ? "active" : ""} 
          onClick={() => setActive("/contact")}
        >
          CONTATO
        </Link>
      </nav>
      <div className="perfil"></div>
    </header>
  );
};

export default Header;
