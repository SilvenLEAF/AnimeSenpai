import M from 'materialize-css'

import React, { useEffect, useState, useContext } from 'react'
import { useHistory, Link, Redirect } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

function UpdateProfile() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  

  const [newPassword, setNewPassword] = useState();
  const [newDisplayName, setNewDisplayName] = useState();

  const [newFrom, setNewFrom] = useState();
  const [newClan, setNewClan] = useState();
  const [newAbout, setNewAbout] = useState();

  const {userData, setUserData} = useContext(AuthContext)
  const history = useHistory();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const token = localStorage.getItem("auth-token");
    const newProfileData = {}
    /* ----------------------
    .       validation
    ---------------------- */
    if(newPassword) newProfileData.password = newPassword;
    if(newDisplayName) newProfileData.displayName = newDisplayName;

    if(newFrom) newProfileData.from = newFrom;
    if(newClan) newProfileData.clan = newClan;
    if(newAbout) newProfileData.about = newAbout;

    console.log(newProfileData);
    const updateRes = await fetch('/users/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      },
      body: JSON.stringify(newProfileData)
    })
    const updateData = await updateRes.json();

    
    setUserData({
     ...userData,
      user: updateData
    })

    
    history.push('/profile')
  }
  

  if(!userData.user) return <Redirect to="/login" />
  return (
    <div className="container">
      <h3>Update Profile</h3>
      <form onSubmit={ handleSubmit }>
        <div className="input-field">
          <input type="password" onChange={ e=> setNewPassword( e.target.value )} />
          <label htmlFor="password">Password</label>
        </div>

        <div className="input-field">
          <input type="text" onChange={ e=> setNewDisplayName( e.target.value )} />
          <label htmlFor="displayName">User Name</label>
        </div>

        <div className="input-field">
          <input type="text" onChange={ e=> setNewClan( e.target.value )} />
          <label htmlFor="clan">Clan</label>
        </div>

        <div className="input-field">
          <input type="text" onChange={ e=> setNewFrom( e.target.value )} />
          <label htmlFor="from">From</label>
        </div>

        <div className="input-field">
          <textarea className="materialize-textarea" onChange={ e=> setNewAbout( e.target.value )} />
          <label htmlFor="about">About Me</label>
        </div>

        <div className="input-field">
          <button type="submit" className="btn waves-effect waves-light blue">Update</button>
          <Link to="/profile" className="btn waves-effect waves-light red" style={{ margin: "10px" }}>Cancel</Link>
        </div>
        
      </form>
    </div>
  )
}

export default UpdateProfile
