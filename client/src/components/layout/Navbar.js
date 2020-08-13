import M from 'materialize-css';

import React, { useEffect, useContext } from 'react';
import SignedOutLinks from './SignedOutLinks';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';
import SignedInLinks from './SignedInLinks';

function Navbar() {
  useEffect(()=>{
    M.AutoInit();
  })

  const { userData, setUserData } = useContext(AuthContext);  
  
  const link = userData.user ? <SignedInLinks/> : <SignedOutLinks/>;
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link  to="/" className="brand-logo"> AnimeSenpai </Link>
        <div className="sidenav-trigger hide-on-large-only" data-target="mobileNav">
              <div></div>
              <div></div>
              <div></div>
        </div>

        <ul className="sidenav" id="mobileNav">
          { link }
        </ul>

        <ul className="right hide-on-med-and-down">
          { link }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
