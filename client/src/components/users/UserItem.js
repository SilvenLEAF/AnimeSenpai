import '../../styles/UserItem.css'

import React from 'react'
import { Link } from 'react-router-dom'


function UserItem({ user }) {
  
  return (
    <Link to={ '/users/' + user.id }>
      <li className="collection-item avatar">
        <i className="material-icons circle blue">person</i>
        <span className="title">{ user.displayName }</span>
        <p className="grey-text">
          { user.from }
        </p>
        <span className="secondary-content blue-text">
          <i className="fa fa-eye"></i>
        </span>


      </li>

      
    </Link>
  )
}

export default UserItem
