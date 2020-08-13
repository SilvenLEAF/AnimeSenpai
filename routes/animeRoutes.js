const router = require('express').Router();
const malScraper = require('mal-scraper');

const search = malScraper.search;
const type = 'anime';



/* ------------------------------------------------
.                 SEARCH ROUTE
------------------------------------------------ */
router.post('/search', async (req, res, next)=>{
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
})


/* ------------------------------------------------
.                 GET INFO ROUTE
------------------------------------------------ */
router.post('/info', async (req, res, next) => {
  try {
    const { animeName } = req.body;

    const animeInfo = await malScraper.getInfoFromName(animeName)
    res.json(animeInfo)
  } catch (err) {
    next(err, req, res)
  }
})





/* ------------------------------------------------
.                 SEASON ROUTE
------------------------------------------------ */
router.post('/season', async (req, res, next)=>{
  try {
    const { animeYear, animeSeason } = req.body;
    const seasonAnime = await malScraper.getSeason( animeYear, animeSeason);
        
    res.json(seasonAnime)
  } catch (err) {
    next(err, req, res)
  }
})


module.exports = router;