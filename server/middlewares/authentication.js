const { verifyToken } = require("../helpers/jwt");
const models = require("../models");

async function authentication(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      return res.status(401).json({ msg: "Unauthorized: Token tidak ditemukan" });
    }

    const [type, token] = authHeader.split(" ");
    
    if (type !== "Bearer" || !token) {
      return res.status(401).json({ msg: "Unauthorized: Token harus berupa Bearer token" });
    }

    const verify = verifyToken(token);
    const user = await models.User.findByPk(verify.id);
    
    if (!user) {
      return res.status(401).json({ msg: "Unauthorized: User tidak ditemukan" });
    }

    req.userId = user.id;
    req.role = user.role;

    next();
  } catch (error) {
    console.log(error, "<<<<<<<<<<<<");
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ msg: "Unauthorized: Token tidak valid" });
    }
    next(error);
  }
}

module.exports = authentication;