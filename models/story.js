const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const storySchema = new Schema({
    title: {type: String, required: true, unique: true},
    timestamps: true,    
    content: [commentSchema]
});



module.exports = mongoose.story('Story', storySchema);