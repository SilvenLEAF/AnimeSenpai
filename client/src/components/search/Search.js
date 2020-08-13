import M from 'materialize-css'
import '../../styles/Search.css'

import React, { useEffect, useState, useContext } from 'react'
import SearchedItem from './SearchedItem';
import AuthContext from '../../contexts/AuthContext';
import { useHistory, Redirect } from 'react-router-dom';

function Search() {
  useEffect(()=>{
    M.AutoInit();
  })

  const { userData, setUserData } = useContext(AuthContext);
  const history = useHistory();

  const [animeInfo, setAnimeInfo] = useState([]);
  const [animeName, setAnimeName] = useState();
  const handleSubmit = async (e) =>{
    e.preventDefault();

    const animeInfoRes = await fetch('/anime/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({animeName})
    });

    const animeInfoData = await animeInfoRes.json();
    setAnimeInfo(animeInfoData)
  }
  
  if(!userData.user) return <Redirect to="/login" />
  return (
    <div className="container">
      <h2><i className="fa fa-search"></i> Search anime</h2>
      <form onSubmit={ handleSubmit }>
        <div className="input-field">
          <input type="text" required onChange={e =>{ setAnimeName(e.target.value)}} />
          <button type="submit" className="btn blue waves-effect waves-light">Search</button>
        </div>
      </form>

      <div id="searchResultsHolder">

        {
          animeInfo[0] ? animeInfo.map( anime =>{
            return <SearchedItem animeInfo={anime}  key={ anime.thumbnail} />
          }) : (
            <p className="red-text text-darken-4">
              Search results will appear HERE...
            </p>
          )
        }
        
      </div>
    </div>
  )
}

export default Search
