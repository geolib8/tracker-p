const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const path = require('path');




router.get('/', async function(req,res){
  //res.sendFile(path.join(__dirname, '/../views/home.html'));
  res.render('home')
  });

  router.get('/errors', async function(req,res){
    
    res.render('errors')
    });

router.get('/login', async function(req,res){
    
      res.render('login')
    });

router.get('/messages', async function(req,res){
    
      res.render('messages')
      });

router.get('/settings', async function(req,res){
    
        res.render('settings')
        });

router.get('/team', async function(req,res){
    
          res.render('team')
          });
  
  module.exports = router;
