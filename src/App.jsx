import React from "react";
import Tarjeta from "./Components/Tarjeta";
import "./index.css";

export default function App() {
  const tarjetas = [
    {
      nombre: "María Gómez",
      profesion: "Desarrolladora Frontend",
      imagen: "/Foto1.jpg", // colocar los archivos en public/ o usar URL externa
      descripcion:
        "Apasionada por React y UX. Me gusta convertir diseños en interfaces accesibles.",
    },
    {
      nombre: "Juan Pérez",
      profesion: "Ingeniero de Software",
      imagen: "/Foto2.jpg",
      descripcion:
        "Trabajo en aplicaciones web escalables. Me enfoco en código limpio y testing.",
    },
    {
      nombre: "Lucía Fernández",
      profesion: "Diseñadora UI/UX",
      imagen: "/avatar3.jpg",
      descripcion:
        "Diseño experiencias centradas en el usuario, prototipos y sistemas de diseño.",
    },
  ];

  return (
    <main className="app">
      <header className="app__header">
        <h1>Mis tarjetas de presentación</h1>
      </header>

      <section className="tarjetas-grid">
        {tarjetas.map((t, i) => (
          <Tarjeta
            key={i}
            nombre={t.nombre}
            profesion={t.profesion}
            imagen={t.imagen}
            descripcion={t.descripcion}
          />
        ))}
      </section>
    </main>
  );
}

