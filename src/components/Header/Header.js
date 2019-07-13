import React from "react";

import "./Header.css";
import facebook from "../../images/facebook.png";
const perfil = "https://img.ibxk.com.br/2017/06/22/22100428046161.jpg";
const header = () => {
  return (
    <div className="toolbar">
      <img src={facebook} className="toolbar-image" alt="logo" />
      <div className="meu-perfil">
        <h3>Meu Perfil</h3>
        <img src={perfil} className="image-perfil" />
      </div>
    </div>
  );
};

export default header;
