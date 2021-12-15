const userModel = require("./users-model");

const findAllUsers = () =>
    userModel.find();

const findUserbyId = (uid) => 
    userModel.findById(uid);

const findUserbyUN = (un) =>
    userModel.findOne({username : un});

const createUser = (user) => 
    userModel.create(user);
    
const updateUser = (id, updates) =>
    userModel.updateOne({_id: id}, updates);


const login = (id) => 
    userModel.updateOne({_id: id}, {$set : {loggedIn : true}});


const logout = (id) => 
    userModel.updateOne({_id: id}, {$set : {loggedIn : false}});


const addItemToList = (id, iid, ll) => 
    userModel.updateOne({_id: id}, {$push: {[ll] : iid}});


const removeItemFromList = (id, iid, li) => 
    userModel.updateOne({_id: id}, {$pull: {[li] : iid}});


const addFollow = (id, uid) => 
    userModel.updateOne({_id: id}, {$push: {following : uid}});


const removeFollow = (id, uid) => 
    userModel.updateOne({_id: id}, {$pull: {following : uid}});


const findLoggedIn = () => 
    userModel.findOne({loggedIn : true});


module.exports = {
    findUserbyId,
    findUserbyUN,
    createUser,
    updateUser,
    login,
    logout,
    addItemToList,
    removeItemFromList,
    addFollow,
    removeFollow,
    findLoggedIn,
    findAllUsers
}