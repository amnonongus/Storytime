const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    userID: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    } 
},
    {
    timestamps: true
});

const storySchema = new Schema({
    title: {
        type: String, 
        required: true, 
        unique: true
    },   
    content: [commentSchema]
 },
    {
    timestamps: true 
})


module.exports = mongoose.model('Story', storySchema);