const dao = require("./items-dao");
module.exports = (app) => {
    const showAllItems = (req, res) => {
        dao.showAllItems()
        .then((items) => res.json(items));
    }

    const showFiltered = (req, res) => {
        dao.showFiltered(req.body)
            .then((items) => res.json(items));
    }

    const showSearchResults = (req, res) => {
        dao.showSearchResults(req.body)
            .then((items) => res.json(items));
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

    app.get("api/items", showAllItems);
    app.get("api/items", showFeatured);
    app.get("api/items", showFiltered);
    app.get("api/items", showSearchResults);
    app.post("api/items", createItem);
    app.delete("api/items/:id", deleteItem);
    app.post("api/items/:id", updateRating);
}