import React, {useEffect} from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const layers = document.querySelectorAll(".layer");
      let scrollPosition = window.scrollY;

      layers.forEach((layer, index) => {
        let speed = (index + 1) * 0.3;
        layer.style.transform = `translateY(${scrollPosition * speed}px)`;

        const beforeElement =
        layers.querySelector("::before");
        beforeElement.style.transform = `translateY(${
          scrollPosition * speed * 0.5
        }px)`;
    });
  };
      window.addEventListener("scroll", handleScroll);
      return () =>  window.removeEventListener("scroll", handleScroll);
  }
  , []);
    
  return (
    <div className="container">
      <header className="hero">
        <h1>NEURO SENSE</h1>
        <p> Você em foco</p>
        <button>SAIBA MAIS</button>
      </header>

      <section className="layer1">
        <h2>Cerebro</h2>
        <p>O cérebro é a parte mais grande do corpo humano, responsável por processar informações e gerar energia.</p>
      </section>

      <section className="layer2">
        <h2>Corpo</h2>
        <p>O corpo humano é a parte física do ser humano, responsável por realizar as atividades do dia a dia.</p>
      </section>

      <section className="layer3">
        <h2>Sistema Nervoso Central</h2>
        <p>O sistema nervoso central é a parte do cérebro responsável por transmitir sinais nervosos para as outras partes do corpo.</p>
      </section>
    </div>
  );
}

export default App;