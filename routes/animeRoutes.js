const router = require('express').Router();
const animeController = require('../controllers/animeController')




router.post('/search', animeController.search_anime)
router.post('/info', animeController.get_info)
router.post('/season', animeController.get_season)




module.exports = router;