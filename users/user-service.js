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

    const addBookmark = (req, res) => {
        dao.addBookmark(req.params.id, req.body)
        .then((status) => console.log("Added bookmark " + status));
    }

    const removeBookmark = (req, res) => {
        dao.removeBookmark(req.params.id, req.body)
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

    const addToCart = (req, res) => {
        dao.addToCart(req.params.id, req.body)
        .then((status) => console.log("Added to cart " + status));
    }

    const removeFromCart = (req, res) => {
        dao.removeFromCart(req.params.id, req.body)
        .then((status) => console.log("Removed from cart " + status));
    }


    app.get("/api/users/:id", findUser);
    app.get("/api/usersloggedin/", findLoggedIn);
    app.post("/api/users", createUser);
    app.post("/api/users/:id", login);
    app.post("/api/users/:id", logout);
    app.post("/api/users/:id", addBookmark);
    app.post("/api/users/:id", removeBookmark);
    app.post("/api/users/:id", addFollow);
    app.post("/api/users/:id", removeFollow);
    app.post("/api/users/:id", addToCart);
    app.post("/api/users/:id", removeFromCart);
}