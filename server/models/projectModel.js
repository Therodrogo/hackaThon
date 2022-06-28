const { ObjectId, ObjectID } = require('bson');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    technologies: [
        {
            type: String,
            required: false
        }
    ],
    learnings: {
        type: String,
        required: false
    },
    repositoryUrl: {
        type: String,
        required: true
    },
    groupID: {
        type: Schema.Types.ObjectId,
        ref: "groups",
        required: true
    },
}, {
    versionKey: false
});

module.exports = mongoose.model('project', projectSchema);