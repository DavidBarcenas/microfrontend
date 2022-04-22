import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthApp from './components/auth-app';
import Header from './components/header'
import LandingApp from './components/landing-app'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="auth" element={<AuthApp />} />
        <Route path="/" element={<LandingApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App