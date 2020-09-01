const router = require('express').Router();
const userController = require('../controllers/userController')

const auth = require('../middleware/auth');





router.get('/', auth, userController.get_logged_in_user)
router.delete('/delete', auth, userController.delete_account)
router.put('/update', auth, userController.update_profile)
router.get('/all', userController.get_all_users)
router.post('/friendUser', userController.get_one_user)



module.exports = router;