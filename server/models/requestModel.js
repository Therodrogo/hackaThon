const { ObjectId, ObjectID } = require('bson');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const requestSchema = new Schema({
    postulant: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    groupID:{
        type: mongoose.Types.ObjectId,
        ref: "group",
    },
},{
    versionKey:false
});

module.exports = mongoose.model('request', requestSchema);