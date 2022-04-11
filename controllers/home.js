//const Comment = require('..models/comment');
//const story = require('../models/story');



function index(req, res) {
   res.render('../views/index', {
       title: 'Index'
   })
}


module.exports = {
    index
}

