import React from 'react'

function Signup() {
  return (
    <div>
      <form>
        <input type="text" placeholder='name' />
        <input type="text" placeholder='last name' />
        <input type="email" placeholder='email' />
        <input type="password" placeholder='password' />
        <input type="checkbox" />
        <label htmlFor="">I want to receive inspiration, marketing promotions and updates via email.</label>
        <button>Sign up</button>
      </form>
      <a href="">Already have an account? Sign in</a>
      <footer>
        <p>Copyright © Microfrontend 2022</p>
      </footer>
    </div>
  )
}

export default Signup