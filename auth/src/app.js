import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/signin';
import Signup from './components/signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/signin" element={<Signin />} />
        <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App