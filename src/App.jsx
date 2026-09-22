import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DhanvanthariHome from './pages/hospitals/dhanvanthari/Home';
import RamanaHome from './pages/hospitals/ramana/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/ramana/*" element={<RamanaHome />} />
      <Route path="/dhanvanthari/*" element={<DhanvanthariHome />} />
      <Route path="*" element={<DhanvanthariHome />} />
    </Routes>
  );
}
