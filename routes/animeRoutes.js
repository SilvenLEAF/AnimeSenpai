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
    res.status(500).json({ error: err.message })
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
    res.status(500).json({ error: err.message })
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
    res.status(500).json({ error: err.message });
  }
})


module.exports = router;