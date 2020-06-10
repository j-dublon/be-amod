exports.up = function (knex) {
  return knex.schema.createTable("all_quotes", (quotesTable) => {
    quotesTable.increments("quote_id").primary();
    quotesTable.string("topic").notNullable();
    quotesTable.text("body").notNullable();
    quotesTable.string("author");
    quotesTable.string("work");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("all_quotes");
};
