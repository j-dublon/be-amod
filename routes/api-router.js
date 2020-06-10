const express = require("express");
const apiRouter = express.Router();
const { sendByTopic } = require("../controllers/topics-controllers");

apiRouter.get("/", (req, res) => {
  res.status(200).send("Welcome to A Multitude of Drops API");
});

apiRouter.get("/:topic", sendByTopic);

module.exports = apiRouter;
