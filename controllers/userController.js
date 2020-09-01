const User = require('../models/User');
const bcrypt = require('bcryptjs');




/* ------------------------------------------------
.             GET LOGGED IN USER
------------------------------------------------ */
module.exports.get_logged_in_user = async (req, res, next)=>{
  try{
    const user = await User.findById(req.user);
    res.json({
      id: user._id,
      displayName: user.displayName,
      from: user.from,
      clan: user.clan,
      about: user.about
    })

  }catch(err){
    next(err, req, res)
  }
}








/* ------------------------------------------------
.                 DELETE ACCOUNT
------------------------------------------------ */
module.exports.delete_account =  async (req, res, next)=>{
  try {
    const deletedUser = await User.findById(req.user);
    res.json(deletedUser);
  } catch (err) {
    next(err, req, res)
  }
}








/* ------------------------------------------------
.                   UPDATE PROFILE
------------------------------------------------ */
module.exports.update_profile =  async (req, res, next)=>{
  try {
    const { password } = req.body;

    if(password) {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      await User.findByIdAndUpdate(req.user, { 
        ...req.body,
        password: hashedPassword
      });
    } else {
      await User.findByIdAndUpdate(req.user, req.body);
    }

    const updatedUser = await User.findById(req.user);
    res.json(updatedUser);
  } catch (err) {
    next(err, req, res)
  }
}









/* ------------------------------------------------
.                   GET ALL USERS
------------------------------------------------ */
module.exports.get_all_users =  async (req, res, next)=>{
  try {
    const allUsers = await User.find({});    

    const refinedAllUsers = [];
    for(let i = 0; i<allUsers.length; i++){
      let user = {
        id: allUsers[i]._id,
        displayName: allUsers[i].displayName,
        from: allUsers[i].from,
        clan: allUsers[i].clan,
        about: allUsers[i].about
      }
      refinedAllUsers.push(user);
    }
    
    res.json(refinedAllUsers);
  } catch (err) {
    next(err, req, res)
  }
}





/* ------------------------------------------------
.                     GET ONE USER
------------------------------------------------ */
module.exports.get_one_user = async (req, res, next)=>{
  try{
    const { userId } = req.body;
    const user = await User.findById(userId);
    res.json({
      id: user._id,
      displayName: user.displayName,
      from: user.from,
      clan: user.clan,
      about: user.about
    })

  }catch(err){
    next(err, req, res)
  }
}