const express = require("express");

const testRouter = express.Router();

testRouter.get("/test", (req, res) => {
    res.send("Hello, World!");
});


module.exports = testRouter;
