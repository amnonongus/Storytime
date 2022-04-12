const Story = require('../models/story');
var router = require('express').Router();

//router.put for editing specific comment that you've entered

//router.delete for deleting a comment

//router.post adding comment to specific story




router.post('/stories/:id', function(req, res){
    Story.findById(req.params.id, function(err, storyFromDatabase) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
            storyFromDatabase.content.push(req.body);
            storyFromDatabase.save(function(err) {
                console.log(storyFromDatabase);
                res.redirect(`/stories/${storyFromDatabase._id}`); 
        });
    });
});


module.exports = router



