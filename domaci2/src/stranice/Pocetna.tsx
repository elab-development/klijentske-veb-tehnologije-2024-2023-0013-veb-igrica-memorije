import React from 'react';
import Navigacija from '../komponente/Navigacija';

export default function Pocetna() {
  return (
    <div>
      <Navigacija />
      <header style={{ padding: '50px', textAlign: 'center', backgroundColor: '#eee' }}>
        <h1>Dobrodošli na našu memorijsku igricu!</h1>
        <p>Ovo je početna stranica.</p>
      </header>
    </div>
  );
}
