const userModel = require("./users-model");

const findUserbyId = (id) => 
    userModel.findById({_id: id});


const createUser = (user) => 
    userModel.create(user);


const login = (id) => 
    userModel.updateOne({_id: id}, {$set : {loggedIn : true}});


const logout = (id) => 
    userModel.updateOne({_id: id}, {$set : {loggedIn : false}});


const addItemToList = (id, iid, list) => 
    userModel.updateOne({_id: id}, {$push: {list : iid}});


const removeItemFromList = (id, iid, list) => 
    userModel.updateOne({_id: id}, {$pull: {list : iid}});


const addFollow = (id, uid) => 
    userModel.updateOne({_id: id}, {$push: {following : uid}});


const removeFollow = (id, uid) => 
    userModel.updateOne({_id: id}, {$pull: {following : uid}});


const findLoggedIn = () => 
    userModel.findOne({loggedIn : true});


module.exports = {
    findUserbyId,
    createUser,
    login,
    logout,
    addItemToList,
    removeItemFromList,
    addFollow,
    removeFollow,
    findLoggedIn
}