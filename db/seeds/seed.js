const { quoteData } = require("../data/index");

exports.seed = function (knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      return knex.insert(quoteData).into("all_quotes").returning("*");
    });
};
