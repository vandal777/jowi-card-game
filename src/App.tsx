import "./App.css";

import { images } from "./assets/images";
import { useState } from "react";

function App() {
  const cards = [
    images.joker,
    images.card0,
    images.card1,
    images.card2,
    images.card3,
    images.card4,
    images.card5,
    images.card6,
    images.card7,
    images.card8,
    images.card9,
    images.card11,
    images.card12,
    images.card13,
    images.card14,
    images.card15,
    images.card16,
    images.card17,
    images.card18,
    images.card19,
    images.card20,
    images.card21,
    images.card22,
    images.card23,
    images.card24,
    images.card25,
    images.card26,
    images.card27,
    images.card28,
    images.card29,
    images.card30,
    images.card31,
    images.card32,
    images.card33,
    images.card34,
    images.card35,
    images.card36,
    images.card37,
    images.card38,
    images.card39,
    images.card40,
    images.card41,
    images.card42,
    images.card43,
    images.card44,
    images.card45,
    images.card46,
    images.card47,
    images.card48,
    images.card49,
    images.card50,
    images.card51,
  ];

  const [selectedCard, setSelectedCard] = useState<number>(0);

  const selectRandomCard = () => {
    const randomSelectedCard = Math.floor(Math.random() * cards.length - 1) + 1;

    setSelectedCard(randomSelectedCard);

    const deleted = cards.splice(randomSelectedCard, 1);
    console.log(
      "🚀 ~ file: App.tsx ~ line 70 ~ selectRandomCard ~ deleted",
      deleted
    );
  };

  return (
    <div className="App">
      <div>JOWI CARD GAME</div>
      <img
        src={cards[selectedCard]}
        alt="jowi card"
        width={"80%"}
        style={{ border: "8px solid black", borderRadius: 16 }}
      />
      <div
        style={{
          top: 400,
          height: 200,
          position: "absolute",
          margin: "0px 60px",
          fontSize: 24,
          fontWeight: "bold",
          color: "white",
          textTransform: "uppercase",
        }}
      >
        Esto seria la explicacion de la carta
      </div>
      <button
        onClick={selectRandomCard}
        style={{
          boxShadow: "inset 0px 1px 0px 0px #a4e271",
          background: "linear-gradient(to bottom, #89c403 5%, #77a809 100%)",
          backgroundColor: "#89c403",
          borderRadius: 6,
          border: "1px solid #74b8070",
          display: "inline-block",
          color: "#ffffff",
          fontFamily: "Arial",
          fontSize: 15,
          fontWeight: "bold",
          padding: "6px 24px",
          textDecoration: "none",
          textShadow: "0px 1px 0px #528009",
        }}
      >
        PRESIONA PARA DESTAPAR UN CARTA
      </button>
    </div>
  );
}

export default App;
