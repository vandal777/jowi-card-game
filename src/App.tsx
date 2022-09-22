import "./App.css";

import { useState } from "react";

function App() {
  const cards = ["joker", "card1", "card2", "card3", "card4", "card5"];

  const [selectedCard, setSelectedCard] = useState<number>(0);

  const selectRandomCard = () => {
    const randomSelectedCard = Math.floor(Math.random() * 5);
    setSelectedCard(randomSelectedCard);
  };

  return (
    <div className="App">
      <div>JOWI CARD GAME</div>
      <div>{cards[selectedCard]}</div>
      <button onClick={selectRandomCard}>
        PRESIONA PARA DESTAPAR UN CARTA
      </button>
    </div>
  );
}

export default App;
