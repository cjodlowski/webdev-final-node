const dao = require("./users-dao");
const mongoose = require('mongoose');


module.exports = (app) => {
    const findUser = (req, res) => {
        dao.findUserbyId(req.params.id)
        .then((user) => {return res.json(user)});
    }
    const findUserUN = (req, res) => {
        dao.findUserbyUN(req.params.UN)
        .then((user) => {return res.json(user)});
    }

    const createUser = (req, res) => {
        dao.createUser(req.body)
            .then((user) => res.json(user));
    }

    const editUser = (req, res) => {
        dao.updateUser(req.params.id, req.body)
        .then((status) => console.log("Updated User " + status));
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
        .then((user) => {return res.json(user)});
    }

    const addItemToList = (req, res) => {
        dao.addItemToList(req.params.id, req.body.iid, req.body.list)
        .then((status) => console.log("Added item " + status));
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

    const findAll = (req, res) => {
        dao.findAllUsers()
        .then((results) => {return res.json(results)});
    }

    app.get("/api/users", findAll)
    app.get("/api/users/:id", findUser);
    app.get("/api/users/un/:UN", findUserUN);
    app.get("/api/usersloggedin/", findLoggedIn);
    app.post("/api/users", createUser);
    app.put("/api/users/:id", editUser)
    app.post("/api/users/edit/:id", )
    app.post("/api/users/login/:id", login);
    app.post("/api/users/logout/:id", logout);
    app.post("/api/users/addItem/:id", addItemToList);
    app.post("/api/users/removeItem/:id", removeItemFromList);
    app.post("/api/users/addFollow/:id", addFollow);
    app.post("/api/users/removeFollow/:id", removeFollow);
}