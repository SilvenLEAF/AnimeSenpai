import M from 'materialize-css'
import React, { useEffect, useContext } from 'react'

import AnimeSlider from './AnimeSlider';
import MovieSlider from './MovieSlider';
import OVASlider from './OVASlider';
import DonghuaSlider from './DonghuaSlider';
import AuthContext from '../../contexts/AuthContext';
import { useHistory, Redirect } from 'react-router-dom';

function Home() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  const { userData, setUserData } = useContext(AuthContext);
  const history = useHistory();
  if(!userData.user) return <Redirect to="/login" />
  return (
    <div>
      <h1 className="center">アニメ先輩</h1>      
      <div className="container">
        <h4>Movie</h4>
      </div>
      <MovieSlider />

      <div className="container">
        <h4>Anime</h4>
      </div>
      <AnimeSlider />
      
      <div className="container">
        <h4>OVA</h4>
      </div>
      <OVASlider />

      <div className="container">
        <h4>Donghua</h4>
      </div>
      <DonghuaSlider />
    </div>
  )
}

export default Home;