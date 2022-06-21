var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const testSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
},{
    versionKey:false
});

module.exports = mongoose.model('Test', testSchema);
