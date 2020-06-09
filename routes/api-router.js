const express = require("express");
const apiRouter = express.Router();
const { sendByTopic } = require("../controllers/topics");

apiRouter.get("/", (req, res) => {
  console.log("hello");
});

apiRouter.get("/:topic", sendByTopic);

module.exports = apiRouter;
