import React, { useEffect, useRef } from 'react'
import { mount } from 'auth/app'

function AuthApp({onLoggedIn}) {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current, {
      onSignIn: () => {
        onLoggedIn()
      }
    })
  }, [])

  return (
    <div ref={ref} />
  )
}

export default AuthApp