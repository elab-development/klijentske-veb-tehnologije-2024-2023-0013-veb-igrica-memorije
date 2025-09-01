import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './stranice/Pocetna';
import Igra from './stranice/Igra';
import Rezultati from './stranice/Rezultati'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/igra" element={<Igra />} />
        <Route path="/rezultati" element={<Rezultati />} /> 
      </Routes>
    </Router>
  );
}

export default App;


