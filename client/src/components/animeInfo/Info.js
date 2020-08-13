import '../../styles/Info.css'
import M from 'materialize-css'

import React, { useState, useEffect, useContext } from 'react'
import AuthContext from '../../contexts/AuthContext';
import { useHistory, Redirect } from 'react-router-dom';

function Info(props) {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  const { userData, setUserData } = useContext(AuthContext)
  const history = useHistory();

  const [animeInfo, setAnimeInfo] = useState();
  const animeName = props.match.params.anime;

  useEffect(()=>{
    const getAnimeInfo = async()=>{
      const animeInfoRes = await fetch('http://localhost:5000/anime/info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ animeName })
      });

      const animeInfoData = await animeInfoRes.json();
      setAnimeInfo(animeInfoData);
      console.log(animeInfoData)
    }
    getAnimeInfo()
  }, [])

  useEffect(()=>{
    console.log(animeInfo)
  })

  if(!userData.user) return <Redirect to="/login" />
    
  return (    
    <>
      {
        animeInfo ? (
          <>
            <div className="container myInfoPageHeadCard">
              <div className="myInfoPageAnimeImageHolder">
                <img src={animeInfo.picture} alt={animeInfo.title} className="responsive-img center center-align"/>
              </div>
      
              <div className="myInfoPageShortAnimeInfoHolder">
              
                <h1 className="blue-text" id="myAnimeInfoPageAnimeTitle">{animeInfo.title}</h1>
                <p className="white-text">Score <i className="material-icons yellow-text text-darken-3">star</i>{animeInfo.score}</p>
                <p className="white-text">Ranked: {animeInfo.ranked}</p>
                <p className="white-text">Members: {animeInfo.members}</p>
                <p className="white-text">{ animeInfo.type }  { (animeInfo.episodes !== 'Unknown') ? ( animeInfo.episodes + 'eps') : ('Ongoing') }</p>
                
                <br/>
                <p className="white-text">{animeInfo.premiered}</p>
                <p className="white-text">{animeInfo.aired}</p>
                <p className="white-text">{animeInfo.broadcast}</p>
                              
              </div>
          
          </div>

          <div className="container mySynopsis">
            <h3>Synopsis</h3>
            <p>
              { animeInfo.synopsis}
            </p>
          </div>

          <div className="container">
            <h3>Characters</h3>
          </div>
          <div className="container charactersHolder">
            {
              animeInfo.characters.map(character =>{
                return (
                  <div className="character" key={character.name}>
                    <img src={character.picture} alt={character.name} />
                    <h5 className="center">{character.name}</h5>
                  </div>
                )
              })
            }
          </div>


          <div className="container">
            <h3>Information</h3>
            <div id="myMainInfoHolder">
              
              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel">
                  Title
                </div>
                <p>{animeInfo.title}</p>
              </div>

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel">
                  Native Title
                </div>
                <p>{animeInfo.japaneseTitle}</p>
              </div>

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel mySynonyms">
                  Synonyms
                </div>
                <p>{animeInfo.synonyms}</p>
              </div>

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel">
                  Type
                </div>
                <p>{animeInfo.type}</p>
              </div>

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel">
                  Episodes
                </div>
                <p>{animeInfo.episodes}</p>
              </div>

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel">
                  Status
                </div>
                <p>{animeInfo.status}</p>
              </div>

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel">
                  Aired
                </div>
                <p>{animeInfo.aired}</p>
              </div>

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel">
                  Premiered
                </div>
                <p>{animeInfo.premiered}</p>
              </div>

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel">
                  Broadcast
                </div>
                <p>{animeInfo.broadcast}</p>
              </div>

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel myProducers">
                  Producers
                </div>
                <p>{animeInfo.producers.join(', ')}</p>
              </div>
              

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel">
                  Studios
                </div>
                <p>{animeInfo.studios.join(', ')}</p>
              </div>

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel">
                  Source
                </div>
                <p>{animeInfo.source}</p>
              </div>

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel myGenres">
                  Genres
                </div>
                <p>{animeInfo.genres.join(', ')}</p>
              </div>

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel">
                  Duration
                </div>
                <p>{animeInfo.duration}</p>
              </div>

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel">
                  Rating
                </div>
                <p>{animeInfo.rating}</p>
              </div>

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel">
                  Score
                </div>
                <p>{animeInfo.score}</p>
              </div>

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel">
                  Score Stats
                </div>
                <p>{animeInfo.scoreStats}</p>
              </div>

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel">
                  Ranked
                </div>
                <p>{animeInfo.ranked}</p>
              </div>

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel">
                  Popularity
                </div>
                <p>{animeInfo.popularity}</p>
              </div>

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel">
                  Favorites
                </div>
                <p>{animeInfo.favorites}</p>
              </div>

              <div className="myMainInfoItem">
                <div className="mymyMainInfoItemLabel">
                  Members
                </div>
                <p>{animeInfo.members}</p>
              </div>

            </div>
          </div>


          <div className="container">
            <h3>Staff</h3>
          </div>
          <div className="container charactersHolder">
            {
              animeInfo.staff.map(staffMember =>{
                return (
                  <div className="character" key={staffMember.name}>
                    <img src={staffMember.picture} alt={staffMember.name} />
                    <h5 className="center">{staffMember.name}</h5>
                    <h6 className="center blue-text">{staffMember.role}</h6>
                  </div>
                )
              })
            }            
          </div>
          </>
        ) : (
          <h1 className="container center-align">
            Loading...
          </h1>
        )
      }
    </>
  )
}

export default Info
