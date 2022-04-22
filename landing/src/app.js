import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import Landing from './components/landing';
import Pricing from './components/pricing';

function App({history}) {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="pricing" element={<Pricing />} />
      </Routes>
    </HistoryRouter>
  )
}

export default App