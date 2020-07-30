const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();


// firing express app
const app = express();
app.use(express.json()); //replacement of body-parser: gives us (req.body)


// connect to MongoDB
mongoose.connect(process.env.MONGODB_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}, (err)=>{
  if(err) throw err;

  console.log(`connected to MongoDB`);
})

/*  ----------------------------------
.             middlewares 
---------------------------------- */
// ---------routes handling











// ------------LISTEN----------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
})