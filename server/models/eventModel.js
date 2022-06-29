var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    dateStart: {
        type: Date,
        required: true,
    },
    dateFinish: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: true,
    },
    groupLimit:{
        type:Number,
        required: true,
        
    },
    coverUrl:{
        type:String,
    },
    groupsID:
    [
        {
            type: mongoose.Types.ObjectId,
            ref: "group",
            
            required: true,    
        }
    ],mapUrl:{
        type: String,  
    }
},{
    versionKey:false
});

module.exports = mongoose.model('Event', eventSchema);