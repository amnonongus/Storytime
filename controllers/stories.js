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
    Story.create(req.body, function(err, story) {
        res.redirect('stories/index')
      })    
  })



  router.get('/:id', async function(req, res) {
    const story = await Story.findById(req.params.id)
        console.log(story)
            res.render('stories/index', {
                story: story,
                title: 'Story Detail'
        });    
    }); 
    
    

// ^^ story show page also 

  module.exports = router






