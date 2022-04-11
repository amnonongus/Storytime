// const Comment = require('..models/comment');
// const story = require('../models/story');



function index(req, res) {
   res.render('../views/index', {
       title: 'Index'
   })
}
// ^^^ renders the 'home' page


module.exports = {
    index
}

