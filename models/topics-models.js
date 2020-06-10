const connection = require("../db/connection");

exports.getByTopic = (topic) => {
  return connection
    .select("*")
    .from("all_quotes")
    .where("all_quotes.topic", "=", topic);
};
