const router = require('express').Router();
const authController = require('../controllers/authController')







router.post('/signup', authController.sign_up)
router.post('/login', authController.log_in)
router.post('/verifyToken', authController.verify_token)




module.exports = router;