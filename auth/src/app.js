import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signin from './components/signin';
import Signup from './components/signup';

function App() {
  console.log(window.location)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<Navigate to="signin" />} />
            <Route path='auth/signin' element={<Signin />} />
            <Route path='auth/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App