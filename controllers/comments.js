const Story = require('../models/story')
var router = require('express').Router();


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



router.put('/:id', function(req, res, next){
  Story.findOne({'content._id': req.params.id}, function(err, storyFromDatabase){
    const storyFrom = storyFromDatabase.content.id(req.params.id);
    console.log(storyFrom, '<===== storyFrom is here') 
    if(!storyFrom.userID.equals(req.user._id)) return res.redirect(`/stories/${storyFromDatabase._id}`);
    console.log(req.body.content, '<=== here is req.body.content')
    storyFrom.content = req.body.content
    storyFromDatabase.save()
    // Story.findByIdAndUpdate(req.params.id, req.body, {new: true});
    // storyFromDatabase.save(function(err){
      if(err) next(err);
      res.redirect(`/stories/${storyFromDatabase._id}`);
  });
});



router.get('/:id/edit', function (req, res, next) {
  if (!req.user) return res.redirect("/stories");
  Story.findOne({'content._id': req.params.id}, function(err, storyDoc){
    const comment = storyDoc.content.id(req.params.id);
    if(!comment.userID.equals(req.user._id)) return res.redirect(`/stories/${storyDoc._id}`);
    res.render('stories/edit', {
      comment: comment,
      title: 'Comment Edit'
    })
  })
})


module.exports = router


