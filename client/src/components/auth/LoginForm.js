import M from 'materialize-css'

import React, { useEffect, useState, useContext } from 'react'
import { useHistory, Redirect } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

function LoginForm() {
  useEffect(()=>{
    M.AutoInit();
  }, [])



  const [error, setError] = useState()

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { userData, setUserData } = useContext(AuthContext)
  const history = useHistory();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const loginRes = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    const loginData = await loginRes.json();
    setUserData({
      token: loginData.token,
      user: loginData.user
    })
    
    if(loginData.msg) setError(loginData.msg)

    if(loginData.token){
      localStorage.setItem('auth-token', loginData.token)
      history.push('/')
    }
  }


  if(userData.user) return <Redirect to="/" />
  return (
    <div className="container">
      <h3>Log in</h3>
      <form onSubmit={ handleSubmit }>
        <p className="center red-text">{ error ? error : null } </p>
        <div className="input-field">
          <input type="email" onChange={ e=> setEmail( e.target.value )} required/>
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-field">
          <input type="password" onChange={ e=> setPassword( e.target.value )} required/>
          <label htmlFor="password">Password</label>
        </div>

        <div className="input-field">
          <button type="submit" className="btn blue">Log in</button>
        </div>
        
      </form>
    </div>
  )
}

export default LoginForm
