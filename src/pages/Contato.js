import React from "react";
import "./Contato.css";

const Contato = () => {
  return (
    <div className="contato-container">
      {/* Coluna de colaboradores */}
      <div className="coluna colaboradores">
        <h2>COLABORADORES</h2>

        <h3>FURG Campus Carreiros</h3>
        <p>Alessandro Morello (EE/FURG)</p>
        <p>Cristina Lemos Goulart (EE/FURG)</p>
        <p>Daniel Helbig (EE/FURG)</p>
        <p>Max Letzow (EE/FURG)</p>
        <p>Sinval Cantarelli Xavier (EE/FURG)</p>

        <h3>FURG Campus Santo Antônio da Patrulha</h3>
        <p>Bianca Osório (EE/SAP)</p>
      </div>

      {/* Coluna de endereço e outras infos */}
      <div className="coluna endereco">
        <h2>ENDEREÇO</h2>
        <p>Campus Carreiros, Edifício Expressão Gráfica</p>
        <p>Av. Itália, km 8, bairro Carreiros</p>
        <p>Rio Grande, RS, Brasil</p>
        <p>CEP: 96203-900</p>
        <p>Tel: (53) 3233-6500</p>

        <h2>E-MAIL</h2>
        <p>let@furg.br</p>

        <h2>TIKTOK</h2>
        <p>furglablet</p>

        <h2>WEBMASTER</h2>
        <p>Jade | jade@let.furg.br</p>
      </div>
    </div>
  );
};

export default Contato;
