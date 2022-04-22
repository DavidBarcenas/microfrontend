import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header'
import LandingApp from './components/landing-app'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <LandingApp />
    </BrowserRouter>
  )
}

export default App