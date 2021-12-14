const itemsModel = require("./items-model");

const showAllItems = () => 
    itemsModel.find();

const showFiltered = (tagarr) =>
    itemsModel.find({tags: {$all: tagarr}});
    
const showSearchResults = (str) => 
    itemsModel.find({$or: [{seller : str}, {title : str}, {tags: str}]});

const showFeatured = () => 
    itemsModel.find({featured: true});

const createItem = (item) =>
    itemsModel.create(item);

const deleteItem = (id) =>
    itemsModel.removeOne({_id : id});

const updateRating = (id, newrating) => 
    itemsModel.updateOne({_id : id}, {$set:{rating : newrating}});
    
const findItemById = (iid) => 
    itemsModel.findById(iid);

module.exports = {
    showAllItems,
    showFiltered,
    showSearchResults,
    showFeatured,
    createItem,
    deleteItem,
    updateRating,
    findItemById
}