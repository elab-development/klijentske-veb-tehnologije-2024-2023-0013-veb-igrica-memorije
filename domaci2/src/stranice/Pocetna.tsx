import React from 'react';
import Navigacija from '../komponente/Navigacija';
import Dugme from '../komponente/Dugme';
import '../css/Pocetna.css';

export default function Pocetna() {
  return (
    <div className="pocetna-background">
      <Navigacija />
      <header className="pocetna-header">
        <img src="/img/logo.igrica.png" alt="Logo igre" className="pocetna-logo" />
        <h1 className="pocetna-naslov">Dobrodošli u memorijsku igricu!</h1>
        <p className="pocetna-uvod">Testirajte svoje pamćenje i zabavite se sa prijateljem!</p>

        <div style={{ marginTop: "20px" }}>
          <Dugme text="Započni igru" to="/igra" />
        </div>
      </header>
    </div>
  );
}
