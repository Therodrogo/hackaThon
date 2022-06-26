const { ObjectId, ObjectID } = require('bson');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const groupSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    userID:
    [   
        {
            type: mongoose.Types.ObjectId,
            ref: "User",   
        }
    ],
    visibility:
    {
        type: Boolean,
        required: true,
    },
    code:{
        type: String,
        unique: true,
        required: true,
       
        
       
        
    },
    leaderID:{
        
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
        
        
        
    },eventID:{
        
        type: mongoose.Types.ObjectId,
        ref: "Event",
        required: true,
        
        
        
    }
},{
    versionKey:false
});

module.exports = mongoose.model('group', groupSchema);