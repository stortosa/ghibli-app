const express = require('express');
const router = express.Router();

module.exports = function(){
  router.get('/', (req, res) => {
    res.send("Index")
  });
  
  router.get('/profile', (req,res)=>{
    res.send("Profile")
  })

  return router; 
}