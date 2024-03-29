const Story = require('../models/story');
var router = require('express').Router();
const isLoggedIn = require('../config/auth');


// <===== Renders the "home" page =====>
router.get('/', isLoggedIn, function(req, res){
    res.render('stories/new', {
     title: 'Storytime'
    })
  })
  
// <===== Renders the stories index page. =====>
router.get('/index', async function(req, res){
    const stories = await Story.find()
    res.render('stories/index', {
      title: 'Stories',
      stories: stories
    })
  })

// <===== Post request that writes the story on the database. =====>
router.post('/', function (req, res){
  console.log('HELLO HELLO HELLO HELLO')
  Story.create(req.body, function(err, story) {
    res.redirect('stories/index')
    })    
})

// <===== Get request for the "DETAILS" button to see story comments =====>
router.get('/:id', async function(req, res){
    const story = await Story.findById(req.params.id)
    .populate()
    console.log(story)
            res.render('stories/show', {
                story: story,
                title: 'Story Details'
        });    
    }); 
 

module.exports = router





