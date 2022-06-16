var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const testSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
        autoIncrement: true,
    },
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
});

module.exports = mongoose.model('Test', testSchema);
