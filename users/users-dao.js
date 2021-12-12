const userModel = require("./users-model");

const findUserbyId = (id) => 
    userModel.findById({_id: id});


const createUser = (user) => 
    userModel.create(user);


const login = (id) => 
    userModel.updateOne({_id: id}, {$set : {loggedIn : true}});


const logout = (id) => 
    userModel.updateOne({_id: id}, {$set : {loggedIn : false}});


const addBookmark = (id, bid) => 
    userModel.updateOne({_id: id}, {$push: {bookmarks : bid}});


const removeBookmark = (id, bid) => 
    userModel.updateOne({_id: id}, {$pull: {bookmarks : bid}});


const addFollow = (id, uid) => 
    userModel.updateOne({_id: id}, {$push: {following : uid}});


const removeFollow = (id, uid) => 
    userModel.updateOne({_id: id}, {$pull: {following : uid}});


const addToCart = (id, cid) => 
    userModel.updateOne({_id: id}, {$push: {cart : cid}});


const removeFromCart = (id, cid) => 
    userModel.updateOne({_id: id}, {$pull: {cart : cid}});


const findLoggedIn = () => 
    userModel.findOne({loggedIn : true});


module.exports = {
    findUserbyId,
    createUser,
    login,
    logout,
    addBookmark,
    removeBookmark,
    addFollow,
    removeFollow,
    addToCart,
    removeFromCart,
    findLoggedIn
}