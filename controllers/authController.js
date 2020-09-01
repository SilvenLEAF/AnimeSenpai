const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');








/* ------------------------------------------------
.                    SIGNUP
------------------------------------------------ */
module.exports.sign_up = async (req, res, next)=>{
  try {    
    let { email, password, passwordCheck, displayName } = req.body;

    /* ------------------------------------------------
    .                   validation
    ------------------------------------------------ */
    // email, password and passwordCheck must be filled
    if(!email || !password || !passwordCheck)
      return res.status(400).json({ msg: `Not all fields have been filled.` });

    // password must be at least 5 characters long
    if(password.length < 5)
      return res.status(400).json({ msg: `The password needs to be at least 5 characters long.` });

    // password and passwordCheck must match
    if(password !== passwordCheck)
      return res.status(400).json({ msg: `Enter the same password twice for verification.` });

    // does the user alrealdy have an account
    const existingUser = await User.findOne({ email: email });
    if(existingUser)
      return res.status(400).json({ msg: `An account with this email already exists.` });

    // if there is no displayName set it to email
    if(!displayName) displayName = email;

  
  
    /* ------------------------------------------------
    .     password hashing and saving to MongoDB
    ------------------------------------------------ */
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const savedUser = await User.create({
      email,
      password: hashedPassword,
      displayName
    });

    res.json(savedUser);



  } catch (err) {
    next(err, req, res)
  }
}










/* ------------------------------------------------
.                     LOGIN
------------------------------------------------ */
module.exports.log_in = async (req, res, next)=>{
  try {
    const { email, password } = req.body;

    /* ------------------------------------------------
    .                   validation
    ------------------------------------------------ */
    // email and password must be filled
    if(!email || !password)
      return res.status(400).json({ msg: `Not all fields have been filled.` });

    // does the user really have an account
    const user = await User.findOne({ email: email });

    if(!user)
      return res.status(400).json({ msg: `No account wuth this email has been registered.` });

    // does the password match
    const isMatch = await bcrypt.compare(password, user.password); // it is a boolean

    if(!isMatch)
      return res.status(400).json({ msg: `Invalid credentials.` });


    /* ------------------------------------------------
    .           user validated not jwt time
    ------------------------------------------------ */
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        displayName: user.displayName
      }
    })

  } catch (err) {
    next(err, req, res)
  }
}













/* ------------------------------------------------
.                  VERIFY TOKEN
------------------------------------------------ */
module.exports.verify_token = async (req, res, next) =>{
  try {
    const token = req.header('x-auth-token');    

    // if there is no token
    if(!token)
      return res.json(false)

    // if there is a token, then verify it
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    
    if(!verified)
      return res.json(false);

    // is the user on the database
    const user = await User.findById(verified.id);

    if(!user)
      return res.json(false);

    // ----------------------default
    return res.json(true);
  } catch (err) {
    next(err, req, res);
  }
}