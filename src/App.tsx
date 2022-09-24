import "./styles.scss";

import { cards, description } from "./const";
import { useEffect, useRef, useState } from "react";

import Play from "./Play";
import { images } from "./assets/images";
import useAudioPlayer from "./useAudioPlayer";

function App() {
  const arrayOfNumbers: number[] = [];
  const { setPlaying } = useAudioPlayer();

  const [shuffledArray, setShuffledArray] = useState<number[]>([]);
  const [selectedCards, setSelectedCards] = useState<number>(0);
  const myRef = useRef<HTMLDivElement>(null);
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
      setPlaying(false);
    }, 10000);
  };

  const selectRandomCard = async () => {
    setShuffling(true);
    setPlaying(true);
    await selectCard();
  };

  useEffect(() => {
    myRef.current?.scrollTo(0, 0);
    cacheImages([...cards, images.wait]);
    for (let i = 0; i < 51; i++) {
      arrayOfNumbers[i] = i;
    }
    setShuffledArray(arrayOfNumbers.sort((a, b) => 0.5 - Math.random()));
  }, []);

  return (
    <div ref={myRef}>
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
        onClick={() => !shuffling && selectRandomCard()}
        style={{
          textAlign: "center",
          zIndex: 0,
        }}
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
          width={"75%"}
          style={{
            border: "8px solid black",
            borderRadius: 16,
          }}
          className={"breathing-button"}
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
              color: "black",
              textTransform: "uppercase",
            }}
            className="neon-text"
          >
            PARTY GOGO TIME
          </div>
        ) : (
          <div
            style={{
              top: 520,
              height: 60,
              position: "absolute",
              textTransform: "uppercase",
              width: "100%",
            }}
            className="description"
          >
            {initGame
              ? description[shuffledArray[selectedCards]]
              : "Aquí comença el joc"}
          </div>
        )}
      </div>
      <audio id="audio">
        <source src={"./jowi-4.mp3"} />
        Your browser does not support the <code>audio</code> element.
      </audio>
    </div>
  );
}

export default App;
