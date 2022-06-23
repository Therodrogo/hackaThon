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
            type: Schema.Types.ObjectId,
            ref: "users",
            unique: true
        }
    ],
    visibility:
    {
        type: Boolean,
        required: true,
    },
    code:{
        type: String,
        required: true,
        unique: true
        
    },
    leaderID:{
        
        type: Schema.Types.ObjectId,
        ref: "users",
        required: true,
        unique: true
        
    },
},{
    versionKey:false
});

module.exports = mongoose.model('group', groupSchema);