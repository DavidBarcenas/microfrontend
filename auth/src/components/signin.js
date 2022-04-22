import React from 'react'
import { Link } from 'react-router-dom'

function Signin({onSignIn}) {
  return (
    <div>
      <form>
        <input type="email" placeholder='email' />
        <input type="password" />
        <input type="checkbox" />
        <label htmlFor="Remember me"></label>
        <button type='button' onClick={onSignIn}>Sign in</button>
      </form>
      <a href="">Don't have an account? </a>
      <Link to="/auth/signup">Sign Up</Link>
      <footer>
        <p>Copyright © Microfrontend 2022</p>
      </footer>
    </div>
  )
}

export default Signin