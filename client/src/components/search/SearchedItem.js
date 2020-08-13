import '../../styles/SearchedItem.css'

import React from 'react'
import { Link } from 'react-router-dom'


function SearchedItem({ animeInfo }) {
  
  return (
    <Link to={ '/info/' + animeInfo.title } className="container mySearchedItem">
      <div className="myAnimeImageHolder">
        <img src={ animeInfo.thumbnail } alt={animeInfo.title}/>
      </div>

        <div className="myAnimeInfoHolder">
         
          <h6 className="blue-text">{ animeInfo.title }</h6>
          <p className="grey-text">Score <i className="material-icons yellow-text text-darken-3">star</i>{ animeInfo.score }</p>
          <p className="grey-text">{ animeInfo.type }  { (animeInfo.nbEps !== '-') ? (animeInfo.nbEps + 'eps') : ('Ongoing') }</p>
          <p className="grey-text">Members: { animeInfo.members }</p>
          <br/>
          <p className="grey-text">Started: { animeInfo.startDate }</p>
          <p className="grey-text">{ (animeInfo.endDate !== '-') ? ('Ended: ' + animeInfo.endDate) : ('Currently airing') }</p>
          <p className="truncate">
            { animeInfo.shortDescription }
          </p>
        </div>
      
    </Link>
  )
}

export default SearchedItem
