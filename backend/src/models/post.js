const mongoose = require('mongoose');

const {Schema} = mongoose;
const CommentSchema = new Schema({
    body: String,
    publishedDate:{
        type: Date,
        default: Date.now,
    }
});

const PostSchema = new Schema({
    title: String,
    body: String,
    publishedDate:{
        type: Date,
        default: Date.now,
    },
    comments:[{
        body: String,
        publishedDate:{
            type: Date,
            default: Date.now,
        },
    }]
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;