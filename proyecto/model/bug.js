const {Schema, model } = require("mongoose");

const BugSchema = Schema({
    title: String,
    author: String,

    post_date: {
        type: Date, 
        default: Date.now
    },
    status: String,
    team: String, 
    severity: String

})

module.exports = model('posts', BugSchema )
