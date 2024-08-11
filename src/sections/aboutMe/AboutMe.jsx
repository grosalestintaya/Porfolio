import React, { useState, useEffect } from 'react';
import styles from './AboutMeStyles.module.css';

const sentences = [
  "Hola, soy George Rosales Tintaya. Tengo 21 años y me apasiona el desarrollo backend.",
  "Me encanta trabajar con tecnologías modernas como Node.js y Docker y el  despliegue en instancias escalables (tipo AWS ec2)",
  "En mi tiempo libre, disfruto de la música y explorar nuevas herramientas de desarrollo.",
  "Vas ha caer dina boluarte",
  
];

function AboutMe() {
  const [text, setText] = useState(sentences[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % sentences.length;
        setText(sentences[nextIndex]);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="aboutMe" className={styles.container}>
      <h1 className="sectionTitle">Sobre mí</h1>
      <div className={styles.textContent}>
        <p className={styles.fadeIn}>{text}</p>
      </div>
    </section>
  );
}

export default AboutMe;

