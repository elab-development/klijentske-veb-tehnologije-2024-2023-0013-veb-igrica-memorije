import React, { useEffect, useState } from "react";
import "../css/Igra.css";

type Card = {
  id: number;
  image: string;
};

export default function Igra() {
  const [cards, setCards] = useState<Card[]>([]);
  const [firstCard, setFirstCard] = useState<Card | null>(null);
  const [secondCard, setSecondCard] = useState<Card | null>(null);
  const [lockBoard, setLockBoard] = useState(false);

  const [playerTurn, setPlayerTurn] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const [tries, setTries] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [totalPairs, setTotalPairs] = useState(0);

  const cardImages = [
    { id: 1, image: "/img/apple.png" },
    { id: 2, image: "/img/cherry.png" },
    { id: 3, image: "/img/blueberry.png" },
    { id: 4, image: "/img/lemon.png" },
    { id: 5, image: "/img/strawberry.png" },
    { id: 6, image: "/img/plum.png" },
  ];

  useEffect(() => {
    const shuffled = [...cardImages, ...cardImages].sort(() => 0.5 - Math.random());
    setCards(shuffled);
    setTotalPairs(cardImages.length);
  }, []);

  const handleChoice = (card: Card) => {
    if (lockBoard) return;
    if (firstCard && firstCard.id === card.id && firstCard.image === card.image) return;

    if (!firstCard) {
      setFirstCard(card);
    } else if (!secondCard) {
      setSecondCard(card);
      setTries((t) => t + 1);
      setLockBoard(true);
    }
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.image === secondCard.image && firstCard.id !== secondCard.id) {
        setMatchedPairs((p) => p + 1);

        if (playerTurn === 1) setPlayer1Score((s) => s + 1);
        else setPlayer2Score((s) => s + 1);

        resetBoard();
      } else {
        setTimeout(() => {
          setPlayerTurn((prev) => (prev === 1 ? 2 : 1));
          resetBoard();
        }, 1000);
      }
    }
  }, [firstCard, secondCard]);

  const resetBoard = () => {
    setFirstCard(null);
    setSecondCard(null);
    setLockBoard(false);
  };

  const endGame = () => {
    const allResults = JSON.parse(localStorage.getItem("allResults") || "[]");
    allResults.push({
      player1: player1Score,
      player2: player2Score,
      tries,
    });
    localStorage.setItem("allResults", JSON.stringify(allResults));
    window.location.href = "/results.html";
  };

  return (
    <div className="Igra">
      <h1>Igrica Memorije</h1>

      {/* Scoreboard */}
      <div className="score-board">
        <h2>Na potezu: Igrač {playerTurn}</h2>
        <p>Igrač 1: {player1Score}</p>
        <p>Igrač 2: {player2Score}</p>
      </div>

      {/* Tabla za igru */}
      <div className="game-board">
        {cards.map((card, index) => {
          const isFlipped =
            (firstCard && firstCard.id === card.id && firstCard.image === card.image) ||
            (secondCard && secondCard.id === card.id && secondCard.image === card.image) ||
            (firstCard && secondCard && firstCard.image === secondCard.image && firstCard.image === card.image);

          return (
            <div
              key={index}
              className={`memory-card ${isFlipped ? "flip" : ""}`}
              onClick={() => handleChoice(card)}
            >
              <img className="front-face" src={card.image} alt="card" />
                <div
                  className="back-face"
                  style={{
                    background: `url(${process.env.PUBLIC_URL + "/img/memory.png"}) center center / cover no-repeat`
                  }}
                ></div>
            </div>
          );
        })}
      </div>

      {/* Dugme */}
      <button className="end-game" onClick={endGame}>
  Završi partiju
</button>

    </div>
  );
}
