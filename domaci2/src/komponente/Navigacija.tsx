import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navigacija.css'; 

export default function Navigacija() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Početna</Link></li>
        <li><Link to="/igra">Igra</Link></li>
        <li><Link to="/rezultati">Poslednji rezultat</Link></li>
        <li><Link to="/uputstvo">Uputstvo</Link></li>
      </ul>
    </nav>
  );
}

