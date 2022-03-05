const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
    postId: {
        type: Number,
        required: true,
    },
    id: {
        type:Number,
        required: true,
    },
    name: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required:true,
    }
});

const comModel = mongoose.model('comments', commentsSchema)

module.exports = comModel;
