import React from "react";
import "../css/Uputstvo.css";
import Dugme from "../komponente/Dugme";
import Naslov from "../komponente/Naslov";

const Uputstvo: React.FC = () => {
  return (
    <div className="uputstvo-background">
      <div className="uputstvo-header">
        <Naslov 
          title="Kako se igra? 🎮" 
        />
      </div>

      <div className="uputstvo-content">
        <ol>
          <li>👥 Igra se igra u dvoje.</li>
          <li>🃏 Na tabli su okrenute karte.</li>
          <li>
            👉 Igrač na potezu bira dve karte:
            <ul>
              <li>✅ Ako su iste – ostaju otvorene i igrač dobija poen.</li>
              <li>
                ❌ Ako nisu iste – karte se vraćaju okrenute i potez prelazi na
                drugog igrača.
              </li>
            </ul>
          </li>
          <li>🔁 Igra se nastavlja dok se sve karte ne otkriju.</li>
          <li>🏆 Pobednik je onaj sa više pronađenih parova 🎉.</li>
        </ol>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Dugme text="⬅️ Nazad na početnu" to="/" />
      </div>
    </div>
  );
};

export default Uputstvo;
