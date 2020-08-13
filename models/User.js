const mongoose = require('mongoose');



// creating UserSchema
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  displayName: { type: String },
  title: { 
    type: String,
    default: 'Otaku'
  },
  from: { 
    type: String,
    default: 'Earth'
  },
  clan: { 
    type: String,
    default: 'AnimeSamurais'
  },
  about: { 
    type: String,
    default: `I am a human being from Planet Earth. I love watching anime, reading manga just like any other Otaku. I love to dream. I am a dreamer. I love all kinds of anime, be it Seinen, Shounen, Shoujo or whatever it may be. Yes, yes, I am an OTAKU!! And I'm pround of that!`
  }
})



// creating User model
module.exports = User = mongoose.model('user', UserSchema);