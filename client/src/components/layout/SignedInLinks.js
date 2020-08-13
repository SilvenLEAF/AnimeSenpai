import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext';

function SignedInLinks() {
  const { userData, setUserData } = useContext(AuthContext);
  
  const handleLogout = () =>{
    setUserData({
      token: undefined,
      user: undefined
    })
    localStorage.setItem('auth-token', '');
  }

  return (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/profile">Profile</NavLink></li>
      <li><NavLink to="/search">Search</NavLink></li>
      <li><NavLink to="/allUsers">All Users</NavLink></li>
      <li onClick={ handleLogout }><NavLink to="/">Log out</NavLink></li>
      <li><NavLink to="/">About Us</NavLink></li>
    </>
  )
}

export default SignedInLinks
