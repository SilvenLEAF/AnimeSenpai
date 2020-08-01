const router = require('express').Router();
const User = require('../models/User');
const auth = require('../middleware/auth');
const bcrypt = require('bcryptjs');




/* ------------------------------------------------
.             GET LOGGED IN USER ROUTE
------------------------------------------------ */
router.get('/', auth, async (req, res, next)=>{
  const user = await User.findById(req.user);
  res.json({
    displayName: user.displayName,
    id: user._id
  })
})









/* ------------------------------------------------
.               DELETE ACCOUNT ROUTE
------------------------------------------------ */
router.delete('/delete', auth, async (req, res, next)=>{
  try {
    const deletedUser = await User.findById(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})







/* ------------------------------------------------
.               FIND ALL USERS ROUTE
------------------------------------------------ */
router.get('/all', async (req, res, next)=>{
  try {
    const allUsers = await User.find({});    

    const refinedAllUsers = [];
    for(let i = 0; i<allUsers.length; i++){
      let user = {
        id: allUsers[i]._id,
        displayName: allUsers[i].displayName
      }
      refinedAllUsers.push(user);
    }
    console.log(refinedAllUsers);
    res.json(refinedAllUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})


















module.exports = router;