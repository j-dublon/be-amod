const express = require("express");
const app = express();
const apiRouter = require("./routes/api-router");
const { handleCustoms, handle500s, handleInvalidPaths } = require("./errors");

const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/api", apiRouter);

app.use(handleCustoms);
app.use(handle500s);
app.all("/*", handleInvalidPaths);

module.exports = app;
