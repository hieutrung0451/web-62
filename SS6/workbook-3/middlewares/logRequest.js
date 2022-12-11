const logRequest = (req, res, next) => {
  console.log("New req: ", new Date());
  next();
};

module.exports = logRequest;
