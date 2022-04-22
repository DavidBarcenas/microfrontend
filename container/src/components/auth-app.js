import React, { useEffect, useRef } from 'react'
import { mount } from 'auth/app'

function AuthApp() {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current)
  }, [])

  return (
    <div ref={ref} />
  )
}

export default AuthApp