import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DhanvanthariHome from './pages/hospitals/dhanvanthari/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/dhanvanthari/*" element={<DhanvanthariHome />} />
      <Route path="*" element={<DhanvanthariHome />} />
    </Routes>
  );
}
