const malScraper = require('mal-scraper');

const search = malScraper.search;
const type = 'anime';








/* ------------------------------------------------
.                    SEARCH 
------------------------------------------------ */
module.exports.search_anime = async (req, res, next)=>{
  try {
    const { animeName } = req.body;

  const searchResult = await search.search(type, {
    maxResult: 25,
    term: animeName
  });

  res.json(searchResult)
  } catch (err) {
    next(err, req, res)
  }
}






/* ------------------------------------------------
.                     GET INFO 
------------------------------------------------ */
module.exports.get_info = async (req, res, next) => {
  try {
    const { animeName } = req.body;

    const animeInfo = await malScraper.getInfoFromName(animeName)
    res.json(animeInfo)
  } catch (err) {
    next(err, req, res)
  }
}










/* ------------------------------------------------
.                      SEASON
------------------------------------------------ */
module.exports.get_season = async (req, res, next)=>{
  try {
    const { animeYear, animeSeason } = req.body;
    const seasonAnime = await malScraper.getSeason( animeYear, animeSeason);
        
    res.json(seasonAnime)
  } catch (err) {
    next(err, req, res)
  }
}