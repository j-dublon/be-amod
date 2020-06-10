const { getByTopic } = require("../models/topics-models");

exports.sendByTopic = (req, res, next) => {
  const { topic } = req.params;
  getByTopic(topic);
};
