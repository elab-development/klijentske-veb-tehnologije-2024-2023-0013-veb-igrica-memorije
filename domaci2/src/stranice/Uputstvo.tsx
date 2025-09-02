import React from "react";
import { Link } from "react-router-dom";

const Uputstvo: React.FC = () => {
  return (
    <div style={{ fontFamily: "Quicksand, sans-serif", background: "#f5f1e6", color: "#333", textAlign: "center", padding: "50px" }}>
      <h1 style={{ color: "#4a3f35" }}>Kako se igra? 🎮</h1>
      
      <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "left", fontSize: "18px", lineHeight: "1.8" }}>
        <ol>
          <li>👥 Igra se igra u dvoje.</li>
          <li>🃏 Na tabli su okrenute karte.</li>
          <li>👉 Igrač na potezu bira dve karte:</li>
          <ul>
            <li>✅ Ako su iste – ostaju otvorene i igrač dobija poen.</li>
            <li>❌ Ako nisu iste – karte se vraćaju okrenute i potez prelazi na drugog igrača.</li>
          </ul>
          <li>🔁 Igra se nastavlja dok se sve karte ne otkriju.</li>
          <li>🏆 Pobednik je onaj sa više pronađenih parova 🎉.</li>
        </ol>
      </div>

      <div style={{ marginTop: "30px" }}>
        <Link to="/" style={{ display: "inline-block", margin: "10px", padding: "12px 24px", fontSize: "16px", textDecoration: "none", backgroundColor: "#a8caba", color: "#2e3d49", borderRadius: "12px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", transition: "all 0.3s ease" }}>
          ⬅️ Nazad na početnu
        </Link>
      </div>
    </div>
  );
};

export default Uputstvo;



