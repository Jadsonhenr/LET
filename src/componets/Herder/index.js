import React from "react";
import { Link } from "react-router-dom";
import "./herder.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="./img/verde.png" alt="Logo" />
      </div>
      <nav className="nav">
        <Link to="/">HOME</Link> {/* Alterei todos para Link */}
        <Link to="#about">LET</Link>
        <Link to="/equipe">EQUIPE</Link>
        <Link to="/Servico3D">SERVIÇO</Link> {/* Corrigido aqui */}
        <Link to="#contact">CONTATO</Link>
      </nav>
      <div className="perfil">
      
      </div>
    </header>
  );
};

export default Header;