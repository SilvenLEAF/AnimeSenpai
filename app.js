const express = require('express');
const path = require('path');



// firing express app
const app = express();
app.use(express.json()); //replacement of body-parser: gives us (req.body)



/*  ----------------------------------
.             middlewares 
---------------------------------- */
// ---------routes handling











// ------------LISTEN----------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`);
})