const Story = require('../models/story');
var router = require('express').Router();



router.get('/', function(req, res){
    res.render('stories/new', {
      title: 'Storytime'
    })
  })
  
  router.get('/index', function(req, res){
    res.render('stories/index', {
      title: 'stories'
    })
  })

  router.post('/', function (req, res){
      console.log(req.body)
      Story.create(req.body, function(err, story) {
        console.log(story);
        res.redirect('stories/index')
      })    
  })


//router.get 

// ^^ story show page also 

  module.exports = router






