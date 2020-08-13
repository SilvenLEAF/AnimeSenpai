const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();


// firing express app
const app = express();
app.use(express.json()); //replacement of body-parser: gives us (req.body)
// Serve static files from the React App
app.use(express.static(path.join(__dirname, 'client/build')));

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
app.use(require('./routes/authRoutes'))
app.use('/users', require('./routes/userRoutes'));
app.use('/anime', require('./routes/animeRoutes'));
/* The "catchall" handler: for any request
that doesn't match one above, send back
React's index.html file. */
app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname,'client/build/index.html'));
});

// ------------errors handling
app.use((err, req, res, next)=>{
  console.log(err.message)
  res.status(500).json({ msg: `Server Error!`, error: err.message })
})









// ------------LISTEN----------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
})