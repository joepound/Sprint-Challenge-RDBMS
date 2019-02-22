module.exports = (req, res, next) => {
  if (req.body.ProjectName) {
    req.body.ProjectName = req.body.ProjectName.toUpperCase();
  }

  next();
};
