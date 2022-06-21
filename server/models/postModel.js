var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false,
    },
},{
    versionKey:false
});

module.exports = mongoose.model('Post', postSchema);