const Story = require('../models/story')
var router = require('express').Router();

//router.put for editing specific comment that you've entered

//router.delete for deleting a comment

//router.post adding comment to specific story




router.post('/stories/:id', function(req, res){
    console.log('helllo post route')
    Story.findById(req.params.id, function(err, storyFromDatabase) {
        req.body.userID = req.user._id;
        console.log(storyFromDatabase)
         storyFromDatabase.content.push(req.body);
         storyFromDatabase.save(function(err) {
          console.log(storyFromDatabase);
          res.redirect(`/stories/${storyFromDatabase._id}`); 
        });
    });
});


router.delete('/:id', function(req, res, next){
  Story.findOne({'content._id': req.params.id}, function(err, storyDocument){
    console.log(storyDocument)
    const comment = storyDocument.content.id(req.params.id);
    console.log(comment)
    if(!comment.userID.equals(req.user._id)) return res.redirect(`/stories/${storyDocument._id}`);
    comment.remove()
    storyDocument.save(function(err){
      if(err) next(err);
      res.redirect(`/stories/${storyDocument._id}`)
    });
  });
});






// router.put('/:id', function(req, res){
//   Story.findById(req.params.id, function(err, storyFromDatabase){
//     req.body.userID = req.user._id;
//     storyFromDatabase.content.findByIdAndUpdate(req.params.id, req.body)
//     res.redirect(`/stories/${storyFromDatabase._id}`)
//   })
// })
 





// router.put('/:id', async function (req, res, next){
//   console.log('what is going on')
//   const updatePost = await Story.findByIdAndUpdate(req.params.id, req.body, {new: true});
//     res.redirect('/stories/' + req.params.id)
// });




module.exports = router



