const models = require("../models");

async function authorization(req, res, next) {
  try {
    const { id } = req.params;
    const product = await models.Product.findByPk(id);

    if (!product) {
      throw { name: "error not found" };
    }

    if (req.role === "admin") {
      next();
    } else {
      if (product.authorId !== req.userId) {
        throw { name: "forbidden" };
      }
      next();
    }
  } catch (error) {
    next(error);
  }
}

module.exports = authorization;