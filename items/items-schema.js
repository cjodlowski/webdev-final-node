const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://cs4550:cs4550@cluster0.twrt7.mongodb.net/final');

const itemsSchema = mongoose.Schema(
    {
        title: String,
        price: Number,
        image: String,
        rating: Number,
        tags: Array,
        featured: Boolean,
        seller : String
    },
    {collection : "shopitems"}
)

module.exports = itemsSchema;