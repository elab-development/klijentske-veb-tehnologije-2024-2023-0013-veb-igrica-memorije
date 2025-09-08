import React from "react";
import Dugme from "../komponente/Dugme";
import Naslov from "../komponente/Naslov";
import Kontejner from "../komponente/Kontejner";
import "../css/Uputstvo.css";

const Uputstvo: React.FC = () => {
  return (
    <div className="uputstvo-background">
      <div className="uputstvo-header">
        <Naslov title="Kako se igra? 🎮" />
      </div>

      <Kontejner>
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

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Dugme text="⬅️ Nazad na početnu" to="/" />
        </div>
      </Kontejner>
    </div>
  );
};

export default Uputstvo;
