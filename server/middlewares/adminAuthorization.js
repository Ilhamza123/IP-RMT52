const user = require("../models/user");

async function adminAuthorization(req, res, next) {
  try {
    if (req.role !== "admin") {
        console.log(req.role);
      throw { name: "forbidden" };
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = adminAuthorization;

