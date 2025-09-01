import React from "react";

const IgricaMemorije: React.FC = () => {
  return (
    <div>
      <h1>Igrica Memorije</h1>

      
      <div className="score-board">
        <h2 id="player-turn">Na potezu: Igrač 1</h2>
        <p id="player1-score">Igrač 1: 0</p>
        <p id="player2-score">Igrač 2: 0</p>
      </div>

      
      <div id="game-board"></div>

      
      <button id="end-game">Završi partiju</button>
    </div>
  );
};

export default IgricaMemorije;