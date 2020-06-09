const { Client } = require("pg");
const dbConfig = require("./config");

const client = new Client(dbConfig);

client
  .connect()
  .then(() =>
    console.log(`connected to ${dbConfig.database} on PORT ${dbConfig.port}`)
  )
  .catch((err) => console.log("connection error:", err));

module.exports = client;
