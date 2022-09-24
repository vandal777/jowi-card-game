import "./App.css";
import "./styles.scss";

import { cards, description } from "./const";
import { useEffect, useState } from "react";

import { images } from "./assets/images";

function App() {
  const arrayOfNumbers: number[] = [];
  const audio = new Audio("./assets/sounds/jowi1.mp3");

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
      audio.pause();
    }, 10000);
  };
  const selectRandomCard = async () => {
    setShuffling(true);
    audio.play();
    await selectCard();
  };

  useEffect(() => {
    cacheImages(cards);
    for (let i = 0; i < 51; i++) {
      arrayOfNumbers[i] = i;
    }
    setShuffledArray(arrayOfNumbers.sort((a, b) => 0.5 - Math.random()));
  }, []);

  return (
    <div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1>
          <span>JOWI</span>
          <span>JOWI</span>
        </h1>
        <h2>CARD GAME</h2>
      </div>
      <div
        className="container"
        onClick={() => !shuffling && selectRandomCard()}
        style={{ textAlign: "center" }}
      >
        <img
          src={
            shuffling
              ? images.wait
              : !initGame
              ? images.joker
              : cards[shuffledArray[selectedCards]]
          }
          alt="jowi card"
          width={"80%"}
          style={{
            border: "8px solid white",
            borderRadius: 16,
          }}
        />
        {shuffling ? (
          <div
            style={{
              top: 200,
              position: "absolute",
              width: "100%",
              margin: "0px auto",
              fontSize: 32,
              fontWeight: "bold",
              color: "white",
              textTransform: "uppercase",
            }}
            className="neon-text"
          >
            PARTY GOGO TIME
          </div>
        ) : (
          <h1
            style={{
              top: 570,
              height: 60,
              position: "absolute",
              textTransform: "uppercase",
              width: "100%",
            }}
            className="description"
          >
            {initGame
              ? description[shuffledArray[selectedCards]]
              : "Aqui empieza el juego de jowi"}
          </h1>
        )}
      </div>
    </div>
  );
}

export default App;
