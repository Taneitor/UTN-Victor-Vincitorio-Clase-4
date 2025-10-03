// src/components/Tarjeta.jsx
import React from "react";
import "../index.css";

export default function Tarjeta({ nombre, profesion, imagen, descripcion }) {
  return (
    <article className="tarjeta">
      <img className="tarjeta__imagen" src={imagen} alt={`Foto de ${nombre}`} />
      <div className="tarjeta__contenido">
        <h2 className="tarjeta__nombre">{nombre}</h2>
        <h3 className="tarjeta__profesion">{profesion}</h3>
        <p className="tarjeta__descripcion">{descripcion}</p>
      </div>
    </article>
  );
}
