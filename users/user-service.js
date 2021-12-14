const dao = require("./users-dao");


module.exports = (app) => {
    const findUser = (req, res) => {
        dao.findUserbyId(req.params.id)
        .then((user) => res.json(user));
    }

    const createUser = (req, res) => {
        dao.createUser(req.body)
            .then((user) => res.json(user));
    }

    const login = (req, res) => {
        dao.login(req.params.id)
        .then((status) => console.log("Logged in " + status));
    }

    const logout = (req, res) => {
        dao.logout(req.params.id)
        .then((status) => console.log("Logged out " + status));
    }

    const findLoggedIn = (req, res) => {
        dao.findLoggedIn()
        .then((user) => res.json(user))
    }

    const addItemToList = (req, res) => {
        dao.addItemToList(req.params.id, req.body.iid, req.body.list)
        .then((status) => console.log("Added bookmark " + status));
    }

    const removeItemFromList = (req, res) => {
        dao.removeItemFromList(req.params.id, req.body.iid, req.body.list)
        .then((status) => console.log("Removed bookmark " + status));
    }

    const addFollow = (req, res) => {
        dao.addFollow(req.params.id, req.body)
        .then((status) => console.log("Added follower " + status));
    }

    const removeFollow = (req, res) => {
        dao.removeFollow(req.params.id, req.body)
        .then((status) => console.log("Removed follower " + status));
    }

    app.get("/api/users/:id", findUser);
    app.get("/api/usersloggedin/", findLoggedIn);
    app.post("/api/users", createUser);
    app.post("/api/users/login/:id", login);
    app.post("/api/users/logout/:id", logout);
    app.post("/api/users/addItem/:id", addItemToList);
    app.post("/api/users/removeItem/:id", removeItemFromList);
    app.post("/api/users/addFollow/:id", addFollow);
    app.post("/api/users/removeFollow/:id", removeFollow);
}