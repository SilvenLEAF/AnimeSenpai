import React, { createContext, useState } from 'react'

export const AnimeContext = createContext();

function AnimeContext() {
  const [searchResult, setSearchResult] = useState();
  return (
    <div className="dddf"></div>    
  )
}

export default AnimeContext
