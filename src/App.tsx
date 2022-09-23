import "./App.css";

import { useEffect, useState } from "react";

import { cards } from "./const";

function App() {
  const arrayOfNumbers: number[] = [];

  const [shuffledArray, setShuffledArray] = useState<number[]>([]);
  const [selectedCards, setSelectedCards] = useState<number>(0);

  const [initGame, setInitGame] = useState<boolean>(false);

  const [shuffling, setShuffling] = useState<boolean>(false);

  const cacheImages = async (urls: string[]) => {
    const promises = urls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    });
    await Promise.all(promises);
  };

  const selectCard = async () => {
    await setTimeout(() => {
      setInitGame(true);
      setSelectedCards((item) => item + 1);
      setShuffling(false);
    }, 2000);
  };
  const selectRandomCard = async () => {
    setShuffling(true);
    await selectCard();
  };

  useEffect(() => {
    cacheImages(cards);
    for (let i = 1; i < 52; i++) {
      arrayOfNumbers[i] = i;
    }
    setShuffledArray(arrayOfNumbers.sort((a, b) => 0.5 - Math.random()));
  }, []);

  return (
    <div className="App">
      <div>{shuffling && "leo"}</div>

      <div>JOWI CARD GAME</div>
      <img
        src={
          shuffling
            ? cards[0]
            : !initGame
            ? cards[0]
            : cards[shuffledArray[selectedCards]]
        }
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
