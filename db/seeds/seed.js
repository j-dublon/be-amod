const { quoteData } = require("../data/index");

exports.seed = function (knex) {
  return knex
    .insert(quoteData)
    .into("quotes")
    .returning("*")
    .then((insertedQuotes) => console.log(insertedQuotes));
};
