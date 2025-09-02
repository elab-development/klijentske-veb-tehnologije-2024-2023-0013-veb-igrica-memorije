import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigacija() {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '15px' }}>
        <li><Link to="/">Početna</Link></li>
        <li><Link to="/igra">Igra</Link></li>
        <li><Link to="/rezultati">Rezultati</Link></li>
        <li><Link to="/uputstvo">Uputstvo</Link></li>
      </ul>
    </nav>
  );
}
