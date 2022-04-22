import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Signin from './components/signin';
import Signup from './components/signup';

function App({onSignIn}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<Navigate to="signin" />} />
        <Route path='auth/signin' element={<Signin onSignIn={onSignIn} />} />
        <Route path='auth/signup' element={<Signup onSignIn={onSignIn} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App