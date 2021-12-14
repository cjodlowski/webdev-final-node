const dao = require("./items-dao");
module.exports = (app) => {
    const showAllItems = (req, res) => {
        dao.showAllItems()
        .then((items) => {res.json(items)});
    }

    const showFiltered = (req, res) => {
        dao.showFiltered(req.body)
            .then((items) => res.json(items));
    }

    const showSearchResults = (req, res) => {
        //console.log(req.params.searchTerm);
        dao.showSearchResults(req.params.searchTerm)
            .then((items) => {res.json(items)});
    }

    const showFeatured = (req, res) => {
        dao.showFeatured()
        .then((items) => res.json(items));
    }

    const createItem = (req, res) => {
        dao.createItem(req.body)
            .then(status => console.log("created an item " + status));
    }

    const deleteItem = (req, res) => {
        dao.deleteItem(req.params.id)
            .then(status => console.log("Deleted an item " + status));
    }

    const updateRating = (req, res) => {
        dao.updateRating(req.body)
            .then((item) => res.json(item));
    }

    const showById = (req, res) => {
        dao.findItemById(req.params.id)
        .then((item) => res.json(item));
    }

    app.get("/api/items", showAllItems);
    app.get("/api/items/id/:id", showById);
    app.get("/api/items/featured", showFeatured);
    app.post("/api/items/filtered", showFiltered);
    app.get("/api/items/search/:searchTerm", showSearchResults);
    app.post("/api/items", createItem);
    app.delete("/api/items/id/:id", deleteItem);
    app.post("/api/items/id/:id", updateRating);
}