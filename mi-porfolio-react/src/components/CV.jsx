import { useEffect, useRef, useState } from 'react';
import { DiJava, DiGithubBadge, DiMsqlServer } from "react-icons/di";
import { SiSpringboot, SiPostman, SiC } from "react-icons/si";



function CV() {

    const carruselRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    const tecnologias = [
        { nombre: "Java", icono: <DiJava size={60} /> },
        { nombre: "Spring Boot", icono: <SiSpringboot size={60} /> },
        { nombre: "SQL", icono: <DiMsqlServer size={60} /> },
        { nombre: "GitHub", icono: <DiGithubBadge size={60} /> },
        { nombre: "Postman", icono: <SiPostman size={60} /> },
        { nombre: "C", icono: <SiC size={60} /> },
    ];

    useEffect(() => {
    const intervalo = setInterval(() => {
      if (!isPaused && carruselRef.current) {
        carruselRef.current.scrollLeft += 130;

        if (
          carruselRef.current.scrollLeft + carruselRef.current.clientWidth >=
          carruselRef.current.scrollWidth
        ) {
          carruselRef.current.scrollLeft = 0;
        }
      }
    }, 2000);

    return () => clearInterval(intervalo);
    }, [isPaused]);

    return (
    <section id="cv">
      <h3>Mi CV</h3>
      <div
        className="carrusel"
        ref={carruselRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {tecnologias.map((tec, index) => (
          <div className="item" key={index}>
            <img src={tec.imagen} alt={tec.nombre} />
            <p>{tec.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default CV;