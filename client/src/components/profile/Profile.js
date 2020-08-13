import M from 'materialize-css'
import '../../styles/Profile.css'

import React, { useContext, useEffect } from 'react'
import AuthContext from '../../contexts/AuthContext'
import { Link, useHistory, Redirect } from 'react-router-dom'

function Profile() {
  
  useEffect(()=>{
    M.AutoInit();
  })
  
  const { userData, setUserData } = useContext(AuthContext);
  const { user } = userData;
  console.log(userData)
  const history = useHistory();

  useEffect(()=>{
    const checkLoggedIn = async ()=>{
      let token = localStorage.getItem("auth-token");

      // if there is no token key, it'll return null
      if(token === null){
        localStorage.setItem("auth-item", "");
        token = "";
      }
      // if there is a token key, then verify
       const verifyTokenRes = await fetch('http://localhost:5000/verifyToken', {
        method: 'POST',
        headers: {
          'x-auth-token': token
        },
        body: null
      })
      
      const verifyTokenData = await verifyTokenRes.json();
      if(verifyTokenData){
        const loggedinUserRes = await fetch(
          'http://localhost:5000/users', {
          method: 'GET',
          headers: {
              'x-auth-token': token
          }
          
        });

        const loggedinUserData = await loggedinUserRes.json();
        setUserData({
          token,
          user: loggedinUserData
        })
      }
    }

    checkLoggedIn();
  }, [])

  const handleDeleteAccount = async () =>{    
    const token = localStorage.getItem("auth-token");
    setUserData({
      token: undefined,
      user: undefined
    })
    localStorage.setItem('auth-token', '');
    
    await fetch('http://localhost:5000/users/delete', {
      method: 'DELETE',
      headers: {
        'x-auth-token': token
      },
      body: null
    })
    history.push('/');
  }

  if(!userData.user) return <Redirect to="/login" />
  return (
    <div className="container myProfileContainer">
      
      { user ? (
        <>
          <h1>Ahoy { user.displayName }!! </h1>
          <div>
            <span className="blue-text myUserNameLabel">User Name: </span>
            <span className="myUserName">{ user.displayName }</span> 
          </div>

          <div>
            <span className="blue-text myUserNameLabel">From: </span>
            <span className="myUserName">{ user.from }</span> 
          </div>

          <div>
            <span className="blue-text myUserNameLabel">Clan: </span>
            <span className="myUserName">{ user.clan }</span> 
          </div>          

          <div>
            <h5>About Me</h5>
            <p>
              { user.about }
            </p>
          </div>

          <div className="right myProfileButtons">
            <Link to="/updateProfile" className="btn waves-effect waves-light blue" style={{ margin: "10px" }}>Update</Link>
            <button className="btn waves-effect waves-light red"style={{ margin: "10px" }} onClick={ handleDeleteAccount } >Delete</button>
          </div>
        </>
      ) :  (
        <>
          <h1>Welcome!!</h1>
          <p>
            Hi there! Welcome to the amazing world of anime. Wander, set on a thrilling adventure, roam about and explore the not-yet-explored flavours of delicious anime! Seinen, Shounen, Shoujo whatever you like!! We have all the anime of the world!!!
          </p>
        </>
      ) }

      
      
    </div>
  )
}

export default Profile
