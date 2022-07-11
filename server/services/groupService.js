
const GroupSchema = require('../models/groupModel')
const userSchema = require('../models/userModel')
const eventSchema = require('../models/eventModel');




const GroupService = {
    async getGroups() {
        try {
            const groups = await GroupSchema.find()
            if (groups.length > 0) {
                return { status: 'Success', code: 200, message: 'groups found', data: groups }
            } else {
                return { status: 'Failed', code: 400, message: 'groups not found', data: [] }
            }


        } catch (e) {
            return { status: 'Failed', code: 400, message: e.message, data: [] }
        }
    },
    async postGroup(req, res) {

        try {
            const group = GroupSchema(req.body)
            group.userID.push(group.leaderID)
            const user = await userSchema.findOne({ _id: group.leaderID }).populate({ path: "eventsID", select: "_id" })
            var IsOnGroup = false
            user.eventsID.forEach(element => {
                if (element._id.equals(group.eventID)) IsOnGroup = true
            });
            
            if (!IsOnGroup) {
                const codeGroup = await this.generateCode();
                group.code = codeGroup;
                await group.save()
                await eventSchema.findOneAndUpdate(
                    { "_id": group.eventID },
                    { "$push": { "groupsID": group._id } }
                )
                await userSchema.findOneAndUpdate({ "_id": group.userID },
                    { "$push": { "eventsID": group.eventID } }
                )
                await userSchema.findOneAndUpdate({ "_id": group.userID },
                    { "$push": { "groupsID": group._id } }
                )
                return { status: 'Success', code: 200, message: 'group is created', data: group }
            } else {
                return { status: 'Failed', code: 400, message: "You are already registered in a group for this event", data: {} }
            }


        } catch (e) {
            return { status: 'Failed', code: 400, message: e.message, data: {} }
        }
    },
    async getGroupById(id) {
        try {
            const group = await GroupSchema.findOne({ _id: id }).populate({path:"userID",select:"name"});
            if (group!=null){
                return { status: 'Success', code: 200, message: 'group with id ' + id + ' is found', data: group }    
            }else{
                return { status: 'Failed', code: 200, message: 'Group with id ' + id + ' is not found', data: {} }    
            }
            

        } catch (e) {
            return { status: 'Failed', code: 400, message: e.message, data: {} }
        }
    }, async deleteGroup(id) {
        try {
            const group = await GroupSchema.deleteOne({ _id: id });
            return { status: 'Success', code: 200, message: 'group with id ' + id + ' is removed', data: group }

        } catch (e) {
            return { status: 'Failed', code: 400, message: e.message, data: {} }
        }
    },
    async joinGroupCode(req){
        
        const code = req.code
        const userID = req.userID
        
        try {
            const group = await GroupSchema.findOne({ code: code }).populate("eventID").populate("userID") 
            if(group!=null){
                if(group.code==code){
                    const user = await userSchema.findOne({ _id: userID }).populate({ path: "groupsID", select: "_id" })
                    var onUserGroups = false
                    user.groupsID.forEach(element => {
                        if (element._id.equals(group._id)) onUserGroups = true
                    });
                    if (!onUserGroups) {

                        if (group.userID.length + 1 < group.eventID.groupLimit) {
                            await GroupSchema.findOneAndUpdate({ _id: group._id },
                                { "$push": { "userID": userID } }

                            )
                            await userSchema.findOneAndUpdate({ "_id": userID },
                                { "$push": { "eventsID": group.eventID } }
                            )
                            await userSchema.findOneAndUpdate({ "_id": userID },
                                { "$push": { "groupsID": group._id } }
                            ) 
                            return { status: 'Success', code: 200, message: "You have been successfully added", data: true }
                        } else {
                            return { status: 'Failed', code: 400, message: "This group is complete", data: false }
                        }

                    } else {
                        return { status: 'Failed', code: 400, message: "You are already registered in a group for this event", data: false }
                    }
                }else{
                    return { status: 'Failed', code: 400, message: "This is an invalid code", data: false }
                }

            }else{
                return { status: 'Failed', code: 400, message: "This is an invalid code", data: false }    
            }
        } catch (error) {
           
            return { status: 'Failed', code: 400, message: error.message, data: false }  
            
        }

    },
    async getGroupByCode(code) {
        try {
            const group = await GroupSchema.findOne({ code: code });
            
            if (group == null) {
                return { status: 'Failed', code: 400, message: "no data with the code " + code, data: {} }
            } else {
                return { status: 'Success', code: 200, message: 'group with id ' + code + ' is found', data: group }
            }
        } catch (e) {
            return { status: 'Failed', code: 400, message: e.message, data: {} }
        }
    },

    async generateCode() {
        const arrayCode = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        let max = arrayCode.length;
        let min = 0;
        let code = "";
        let repeat = true;
        while (repeat) {
            for (let i = 0; i < 5; i++) {
                let index = Math.floor(Math.random() * (max - min)) + min;
                code = code + arrayCode[index];
            }            
            const verification = await this.getGroupByCode(code);       
            if (verification.code == 400) {
                repeat = false;
            }
        }
        return code;
    },
    async leaveGroup(req){
        try {
            const groupID = req.body.groupID
            const userID = req.body.userID
            const group = await GroupSchema.findOne({_id:groupID}).populate({path:"leaderID",select:"_id"})
            if (group!=null){
                if(!group.leaderID.equals(userID)){                   
                    await GroupSchema.findOneAndUpdate({ _id: groupID },{ "$pull": { "userID": userID }})
                    await userSchema.findOneAndUpdate({ _id: userID },{ "$pull": { "groupsID": groupID } })
                    await userSchema.findOneAndUpdate({ _id: userID },{ "$pull": { "eventsID": group.eventID }})
                    return { status: 'Success', code: 200, message: 'You are removed from the group with ID: '+groupID, data: true }
                }else{
                    if(group.userID.length>1){
                        await GroupSchema.findOneAndUpdate({ _id: groupID },{ "$pull": {"userID": userID }})
                        await GroupSchema.findOneAndUpdate({ _id: groupID },{ leaderID: group.userID[1]})
                        await userSchema.findOneAndUpdate({ _id: userID },{ "$pull": { "groupsID": groupID }})
                        await userSchema.findOneAndUpdate({ _id: userID },{ "$pull": { "eventsID": group.eventID}})
                        return { status: 'Success', code: 200, message: 'You are the leader of this group, another user will be selected as group leader with ID'+groupID, data: true}    
                    }else{
                        await GroupSchema.findOneAndUpdate({ _id: groupID },{ "$pull": {"userID": userID}})
                        await userSchema.findOneAndUpdate({ _id: userID },{"$pull": { "groupsID": groupID}})
                        await userSchema.findOneAndUpdate({ _id: userID },{"$pull":{"eventsID": group.eventID}})
                        await eventSchema.findOneAndUpdate({ _id: group.eventID },{ "$pull":{"groupsID":group.eventID}})
                        await GroupSchema.deleteOne({_id:groupID})
                        return { status: 'Success', code: 200, message: 'You are the leader of this group and there are no more participants, the group will be deleted from the system', data: true } 

                    }
                }
            }else{
                return { status: 'Failed', code: 400, message: "This group does not exist", data: false }
            }      
        } catch (error) {
            return { status: 'Failed', code: 400, message: e.message, data: false }    
        }

    },

    async isLeader(req){
        try {
            const groupUser = req.body.userID;
            const groupID = req.body.code;
            const group = await GroupSchema.findOne({code:groupID});
            if (group.leaderID == groupUser){
                return { status: 'Success', code: 200, message: 'user is Leader', data: true }  
            }
            else {
                return { status: 'Failed', code: 400, message: 'user is not Leader', data: false }  
            }
        } catch (error) {
            return { status: 'Failed', code: 400, message: error.message, data: false }    
        }
    },

    async kickMember(req){
        try {
            const kickID = req.body.userID;
            const leaderID = req.body.leaderID;
            const groupCode = req.body.code;
            const group = await GroupSchema.findOne({code: groupCode});
            console.log(group);
            if (group.leaderID == leaderID){
                await GroupSchema.findOneAndUpdate({code: groupCode},{ "$pull": { "userID": kickID }});
                await userSchema.findOneAndUpdate({ _id: kickID },{ "$pull": { "groupsID": group._id } });
                await userSchema.findOneAndUpdate({ _id: kickID },{ "$pull": { "eventsID": group.eventID }});
                return { status: 'Success', code: 200, message: 'User with id '+ kickID +'was kick from the group with id '+group._id , data: group }
            } else{
                return { status: 'Failed', code: 400, message: 'the user with id '+leaderID+' does not have the permissions to perform this action', data: {} }
            }
        } catch (error) {
            return { status: 'Failed', code: 400, message: error.message, data: {} }
        }
    }
};

module.exports = GroupService;