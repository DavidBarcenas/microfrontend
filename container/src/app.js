import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/header'

const AuthLazy = lazy(() => import('./components/auth-app'))
const LandingLazy = lazy(() => import('./components/landing-app'))
const DashboardLazy = lazy(() => import('./components/dashboard-app'))

// TODO: Create loading component
function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if(isSignedIn) {
      navigate('/dashboard')
    }
  }, [isSignedIn])

  return (
    <>
      <Header isSignedIn={isSignedIn} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingLazy />} />
          <Route path="auth" element={<AuthLazy onLoggedIn={() => setIsSignedIn(true)} />} />
          <Route path="dashboard" element={isSignedIn ? <DashboardLazy /> : <Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App