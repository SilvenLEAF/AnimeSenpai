import M from 'materialize-css'
import '../../styles/Profile.css'

import React, { useEffect, useState, useContext } from 'react'
import { Link, useHistory, Redirect } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'


function UserProfile(props) {
  
  useEffect(()=>{
    M.AutoInit();
  })
  const { userData, setUserData } = useContext(AuthContext);
  const history = useHistory();

  const { allUsers } = props;
  const userId = props.match.params.id;  
  const [user, setUser] = useState();

  useEffect(()=>{
    const getFriendUser = async ()=>{
      const friendUserRes = await fetch("/users/friendUser", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId })
      })

      const friendUserData = await friendUserRes.json();
      setUser(friendUserData);
    }
    getFriendUser();
  }, [])


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
            <Link to="/allUsers" className="btn waves-effect waves-light blue" style={{ margin: "10px" }}>Back</Link>
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

export default UserProfile
