import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "../css/Igra.css";

type Card = {
  id: number;
  image: string;
  uniqueId: number; // jedinstveni ID za svaku instancu
  matched?: boolean;
};

export default function Igra() {
  const navigate = useNavigate(); 

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
    let uniqueId = 0;
    const duplicated: Card[] = [...cardImages, ...cardImages].map(c => ({
      ...c,
      uniqueId: uniqueId++,
      matched: false
    }));
    setCards(shuffleArray(duplicated));
    setTotalPairs(cardImages.length);
  }, []);

  const shuffleArray = (array: Card[]) => array.sort(() => 0.5 - Math.random());

  const handleChoice = (card: Card) => {
    if (lockBoard) return;
    if (card.matched) return;
    if (firstCard && firstCard.uniqueId === card.uniqueId) return;

    if (!firstCard) {
      setFirstCard(card);
    } else if (!secondCard) {
      setSecondCard(card);
      setTries(t => t + 1);
      setLockBoard(true);
    }
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.id === secondCard.id) {
        setCards(prev =>
          prev.map(c =>
            c.id === firstCard.id && (c.uniqueId === firstCard.uniqueId || c.uniqueId === secondCard.uniqueId)
              ? { ...c, matched: true }
              : c
          )
        );

        if (playerTurn === 1) setPlayer1Score(s => s + 1);
        else setPlayer2Score(s => s + 1);
        setMatchedPairs(p => p + 1);
        resetBoard();
      } else {
        setTimeout(() => {
          setPlayerTurn(prev => (prev === 1 ? 2 : 1));
          resetBoard();
        }, 1000);
      }
    }
  }, [secondCard]);

  useEffect(() => {
  if (matchedPairs === totalPairs && totalPairs > 0) {
    endGame();
  }
}, [matchedPairs, totalPairs]);

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
    navigate("/rezultati");
  };

  return (
    <div className="Igra">
      {/* Dugme za nazad */}
      <button className="back-button" onClick={() => navigate("/")}>
        &larr; Idi nazad
      </button>

      <h1>Igrica Memorije</h1>

      <div className="score-board">
        <h2>Na potezu: Igrač {playerTurn}</h2>
        <p>Igrač 1: {player1Score}</p>
        <p>Igrač 2: {player2Score}</p>
      </div>

      <div className="game-board">
        {cards.map((card) => {
          const isFlipped =
            card.matched ||
            card.uniqueId === firstCard?.uniqueId ||
            card.uniqueId === secondCard?.uniqueId;

          return (
            <div
              key={card.uniqueId}
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

      <button className="end-game" onClick={endGame}>
        Završi partiju
      </button>
    </div>
  );
}
