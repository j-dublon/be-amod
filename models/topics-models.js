const connection = require("../db/connection");

exports.getByTopic = (topic) => {
  return connection
    .select("*")
    .from("all_quotes")
    .where("all_quotes.topic", "=", topic)
    .then((quotes) => {
      if (quotes.length === 0) {
        return Promise.reject({ status: 404, msg: "topic not found" });
      } else {
        return quotes;
      }
    });
};
