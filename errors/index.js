exports.handleCustoms = (err, req, res, next) => {
  if (err.status) res.status(err.status).send({ msg: err.msg });
  else next(err);
};

exports.handle500s = (err, req, res, next) => {
  res.status(500).send({ msg: "server error" });
};

exports.handleInvalidPaths = (req, res) => {
  res.status(404).send({ msg: "path not found" });
};
