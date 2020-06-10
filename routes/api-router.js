const express = require("express");
const apiRouter = express.Router();
const { sendByTopic } = require("../controllers/topics-controllers");
const { sendAvailableEndpoints } = require("../controllers/api-controllers");

apiRouter.route("/").get(sendAvailableEndpoints);

apiRouter.get("/:topic", sendByTopic);

module.exports = apiRouter;
