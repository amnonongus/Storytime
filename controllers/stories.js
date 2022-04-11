// const Comment = require('..models/comment');
//  const Story = require('../models/story');


// function create(req, res) {
//     Story.findByID({
//         'stories._id': req.params.findOne}, function(err, storyFromDatabase){
//             req.body.user = req.user._id;
//             req.body.userName = req.user.name;
//             req.body.userAvatar = req.user.avatar;

//             storyFromDatabase.stories.push(req.body);
//             storyFromDatabase.save(function (err){
//                 res.redirect('/stories');
//             });
//         });
// }

function show(req, res) {
    res.render("stories/show", {
        title: "Show Stories"
    });
}


module.exports = {
    show
}

