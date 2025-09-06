import React from 'react';
import Navigacija from '../komponente/Navigacija';
import '../css/Pocetna.css';

export default function Pocetna() {
  return (
    <div className="pocetna-background">
      <Navigacija />
      <header className="pocetna-header">
        <img src="/img/logo.igrica.png" alt="Logo igre" className="pocetna-logo" />
        <h1 className="pocetna-naslov">Dobrodošli u memorijsku igricu!</h1>
        <p className="pocetna-uvod">Testirajte svoje pamćenje i zabavite se sa prijateljem!</p>

        <div className="button-container">
          <a href="/igra" className="fade-in-button">Započni igru</a>
        </div>
      </header>
    </div>
  );
}
