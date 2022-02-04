const {Schema, model } = require("mongoose");

const PostSchema = Schema({
    title: String,
    author: String, 
    post_date: {
        type: Date, 
        default: Date.now
    },
    post_data: String

})

module.exports = model('posts', PostSchema )
