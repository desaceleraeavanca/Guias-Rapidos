import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import Erros from './pages/Erros';
import Passos from './pages/Passos';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/7-erros" element={<Erros />} />
        <Route path="/7-passos" element={<Passos />} />
      </Routes>
      <Analytics />
    </Router>
  );
}
