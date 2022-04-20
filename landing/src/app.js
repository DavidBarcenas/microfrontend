import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/landing';
import Pricing from './components/pricing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="pricing" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App