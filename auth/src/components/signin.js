import React from 'react'

function Signin() {
  return (
    <div>
      <form>
        <input type="email" placeholder='email' />
        <input type="password" />
        <input type="checkbox" />
        <label htmlFor="Remember me"></label>
        <button>Sign in</button>
      </form>
      <a href="">Don't have an account? Sign Up</a>
      <footer>
        <p>Copyright © Microfrontend 2022</p>
      </footer>
    </div>
  )
}

export default Signin