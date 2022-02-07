const { render } = require('ejs');
const express = require('express');
const router = express.Router();
const path = require('path');
const Post = require('../model/post');
const User = require('../model/user');
let verify = require('../middleware/verifyaccess');
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt")



router.get('/', verify, async function(req,res){
  //res.sendFile(path.join(__dirname, '/../views/home.html'));
  //res.redirect("/")
  res.render('logins')
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

/*router.get('/team', async function(req,res){
    
          res.render('team')
          });*/

router.get('/team', async function(req,res){

            let posts = await Post.find()
            res.render('team',{posts});
            console.log(posts);
          });


router.get('/newTeammate', async function(req,res){
    
            res.render('newTeammate')
            });
          
router.post('/newTeammate', async (req,res) =>{

              let post = new Post(req.body)
              await post.save()
              res.redirect("/team")
            });

router.post('/delete/:id', async (req,res) =>{
              let id = req.params.id
              await Post.remove({_id:req.params.id},req.body)
              res.redirect("/team")
            });
            
            
router.get('/delete/:id', async (req,res) =>{
              let id = req.params.id
              let post = await Post.findById(id)
              res.render('delete',{post});
            });

router.get('/cancel', async function(req,res){
    
              res.render('team')
              });
router.get('/login', async function(req,res){
    
                res.render('login')
                });

router.get('/register', async function(req,res){
    
                  res.render('register')
                  });

router.post('/addUser', async (req,res) => {

                    let user = new User (req.body)
                    
                   // let exists = User.findOne({user_id: user.email})
                    
                    //if (!exists) {
                    
                    // Hash a la contraseña
                    
                    user.password = bcrypt.hashSync(user.password,10)
                    console.log(user)
                    //await user.save()
                    
                    res.redirect('/')
                    })

router.get('/login', async function(req,res){

                      res.render('login')
                      });
                   
router.post('/login', async (req,res) => {

                      let email = req.body.email
                      let plainpassword = req.body.password
                      
                      console.log(email)
                      console.log(password)
                      })
                      
  module.exports = router;

