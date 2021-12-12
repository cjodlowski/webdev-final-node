const mongoose = require('mongoose');
const schema = require("./users-schema");

const userModel = mongoose.model("UsersModel", schema);

module.exports = userModel;

