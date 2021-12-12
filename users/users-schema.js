const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://cs4550:cs4550@cluster0.twrt7.mongodb.net/test');

const usersSchema = mongoose.Schema(
    {
        username: String,
        password: String,
        firstName:String,
        lastName: String,
        loggedIn: Boolean,
        bookmarks: Array,
        following: Array,
        cart: Array,
        role: {type : String, enum: ["BUYER", "SELLER"]},
        profile: String
    },
    {collection: "users"}
)

module.exports = {
    usersSchema
}