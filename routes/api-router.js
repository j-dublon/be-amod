const express = require("express");
const apiRouter = express.Router();
const { sendByTopic } = require("../controllers/topics-controllers");
const { sendAvailableEndpoints } = require("../controllers/api-controllers");
const { send405Error } = require("../errors/index");

apiRouter.route("/").get(sendAvailableEndpoints).all(send405Error);

apiRouter.get("/:topic", sendByTopic).all(send405Error);

module.exports = apiRouter;
