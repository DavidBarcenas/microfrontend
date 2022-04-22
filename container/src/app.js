import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header'

const AuthLazy = lazy(() => import('./components/auth-app'))
const LandingLazy = lazy(() => import('./components/landing-app'))

// TODO: Create loading component
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingLazy />} />
          <Route path="auth" element={<AuthLazy />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App