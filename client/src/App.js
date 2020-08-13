import 'materialize-css/dist/css/materialize.min.css';

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthContext from './contexts/AuthContext';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import SignupForm from './components/auth/SignupForm';
import LoginForm from './components/auth/LoginForm';
import Search from './components/search/Search';
import Info from './components/animeInfo/Info';
import UpdateProfile from './components/profile/UpdateProfile';
import AllUsers from './components/users/AllUsers';
import UserProfile from './components/users/UserProfile';


function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });
  

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




  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ userData, setUserData}}>
        


        <div className="App">
          <div id="wrapper">
            <Navbar/>

            <Switch>
              <Route exact path = "/" component={Home}/>
              <Route path = "/signup" component={SignupForm}/>
              <Route path = "/login" component={LoginForm}/>
              <Route path = "/profile" component={Profile}/>
              <Route path = "/updateProfile" component={UpdateProfile}/>

              <Route path = "/allUsers" component={AllUsers} />
              <Route path = "/users/:id" component={UserProfile} />

              <Route path = "/search" component={Search}/>
              <Route path = "/info/:anime" component={Info}/>
            </Switch>
          </div>

          <div id="footer">
            <Footer/>
          </div>

        </div>



      </AuthContext.Provider>
    </BrowserRouter>

  );
}

export default App;
