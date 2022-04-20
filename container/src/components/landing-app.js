import React, { useEffect, useRef } from 'react'
import { mount } from 'landing/app'

function LandingApp() {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current)
  }, [])

  return (
    <div ref={ref} />
  )
}

export default LandingApp