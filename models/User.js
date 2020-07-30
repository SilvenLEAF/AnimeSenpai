const mongoose = require('mongoose');



// creating UserSchema
const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  displayName: { type: String }
})



// creating User model
module.exports = User = mongoose.model('user', UserSchema);