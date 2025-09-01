import React from "react";
import { Link } from "react-router-dom";

const Rezultati: React.FC = () => {
  const allResults = JSON.parse(localStorage.getItem("allResults") || "[]");
  const lastResult = allResults[allResults.length - 1];
  let content;

  if (lastResult) {
    let winner = "";
    if (lastResult.player1 > lastResult.player2) {
      winner = "Pobednik: Igrač 1 🎉";
    } else if (lastResult.player2 > lastResult.player1) {
      winner = "Pobednik: Igrač 2 🎉";
    } else {
      winner = "Rezultat: Nerešeno 🤝";
    }

    content = (
      <div>
        <p><strong>Broj pokušaja:</strong> {lastResult.tries}</p>
        <p><strong>Igrač 1 - parovi:</strong> {lastResult.player1}</p>
        <p><strong>Igrač 2 - parovi:</strong> {lastResult.player2}</p>
        <h2>{winner}</h2>
      </div>
    );
  } else {
    content = <p>Nema rezultata.</p>;
  }

  return (
    <div style={{ fontFamily: "Quicksand, sans-serif", background: "#f5f1e6", color: "#333", textAlign: "center", padding: "50px" }}>
      <h1 style={{ color: "#4a3f35" }}>Rezultati partije</h1>
      <div style={{ margin: "20px 0", fontSize: "18px" }}>{content}</div>
      <div style={{ marginTop: "30px" }}>
        <Link to="/" style={{ display: "inline-block", margin: "10px", padding: "12px 24px", fontSize: "16px", textDecoration: "none", backgroundColor: "#a8caba", color: "#2e3d49", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", transition: "all 0.3s ease" }}>
          Nova igra
        </Link>
        <Link to="/stats" style={{ display: "inline-block", margin: "10px", padding: "12px 24px", fontSize: "16px", textDecoration: "none", backgroundColor: "#a8caba", color: "#2e3d49", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", transition: "all 0.3s ease" }}>
          Pogledaj sve statistike
        </Link>
      </div>
    </div>
  );
};

export default Rezultati;
