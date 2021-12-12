const mongoose = require('mongoose');
const schema = require("./items-schema");

const itemsModel = mongoose.model("ItemsModel", schema);

module.exports = itemsModel;