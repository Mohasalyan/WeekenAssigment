const logMid = (req, res, next) => {
    console.log(
      `${new Date().toDateString()} - ${req.method} request to ${req.path}`
    );
    next();
  };
  
  module.exports = logMid;
  