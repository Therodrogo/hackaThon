const { ObjectID } = require('bson');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    career: {
        type: String,
        required: false,
    },
    mail: {
        type: String,
        unique: true,
        required: true,
    },
    phone: {
        type: String,
        unique: true,
        required: true,
    },
    groupsID:
    [
        
        {
            type: Schema.Types.ObjectId,
            ref: "group",
            
            required: true,  
            
        }
    ],
    eventsID:
    [
        {
            type: Schema.Types.ObjectId,
            ref: "Event",
            
            required: true,  
            
        }
    ]

},{
    versionKey:false
});

module.exports = mongoose.model('User', userSchema);