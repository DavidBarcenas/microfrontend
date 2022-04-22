import React from 'react'
import { Link} from 'react-router-dom';

function Header({isSignedIn}) {
  return (
    <div>Header <Link to="/auth">{isSignedIn ? 'Logout' : 'Login'}</Link></div>
  )
}

export default Header