import M from 'materialize-css'

import React, { useEffect, useState, useContext } from 'react'
import UserItem from './UserItem';
import AuthContext from '../../contexts/AuthContext';
import { useHistory, Redirect } from 'react-router-dom';

function AllUsers() {
  useEffect(()=>{
    M.AutoInit();
  })

  const { userData, setUserData } = useContext(AuthContext);
  const history = useHistory();


  const [allUsers, setAllUsers] = useState();
  useEffect(()=>{
    const getAllUsers = async () =>{
      const allUsersRes = await fetch('http://localhost:5000/users/all');
  
      const allUsersData = await allUsersRes.json();
      console.log(allUsersData);
      setAllUsers(allUsersData)    
    }

    getAllUsers();
    
  }, []) 
  

  if(!userData.user) return <Redirect to="/login" />
  return (
    <div className="container">
      
      {
        allUsers ? (
          <ul className="collection with-header">
            <li className="collection-header">All Users</li>
            {
              allUsers.map( (user) =>{
                return <UserItem user={ user } key={ user.id } />
              })
            }
          </ul>
        ) : (
          <h4>
            Loading ...
          </h4>
        )
      }
    
    </div>
  )
}

export default AllUsers
