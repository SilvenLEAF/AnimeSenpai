import M from 'materialize-css'
import React, { useEffect, useState, useContext } from 'react'
import { useHistory, Redirect } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

function SignupForm() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  
  const [error, setError] = useState(null);


  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();

  const { userData, setUserData } = useContext(AuthContext);
  const history = useHistory();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setError(null);
    const newUser = { email, password, passwordCheck, displayName };
      
    const signupRes = await fetch('http://localhost:5000/signup',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    const signupData = await signupRes.json();
    console.log(signupData)
    if(signupData.msg) setError(signupData.msg)
    console.log(error)
    console.log(signupData.msg)

    const loginRes = await fetch('http://localhost:5000/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const loginData = await loginRes.json();

    if(!signupData.msg) {
      if(loginData.msg) setError(loginData.msg);
      console.log(error);
      console.log(loginData.msg)
    }

    if(loginData.token){
      setUserData({
        token: loginData.token,
        user: loginData.user
      });
      localStorage.setItem('auth-token', loginData.token);
  
      history.push('/');
    }
 
  }

  if(userData.user) return <Redirect to="/" />
  return (
    <div className="container">
      <h3>Sign up</h3>
      <form onSubmit={ handleSubmit }>
        <p className="center red-text">{ error ? error : null} </p>
        <div className="input-field">
          <input type="email" onChange={ e => setEmail(e.target.value )} required />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-field">
          <input type="password" onChange={ e => setPassword(e.target.value )} required />
          <label htmlFor="password">Password</label>
        </div>

        <div className="input-field">
          <input type="password" onChange={ e => setPasswordCheck(e.target.value )} required />
          <label htmlFor="passwordCheck">Confirm Password</label>
        </div>

        <div className="input-field">
          <input type="text" onChange={ e => setDisplayName(e.target.value )} required />
          <label htmlFor="displayName">Username</label>
        </div>

        <div className="input-field">
          <button type="submit" className="btn blue waves-effect waves-light">Sign up</button>
        </div>
      </form>
    </div>  
  )
}

export default SignupForm
