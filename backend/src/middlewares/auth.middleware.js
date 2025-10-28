const foodPartnerModel = require("../models/foodpartner.model");
const jwt = require("jsonwebtoken");

async function authFoodPartnerMiddleware(req, res, next) {
  const token = req.cookies.token; //get token from cookies
  if (!token) {
    return res.status(401).send({ message: "Please login first" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); //verify token
    const foodpartner = await foodPartnerModel.findById(decoded.id);
    if (!foodpartner) {
      return res.status(401).send({ message: "Food partner not found" });
    }
    req.foodpartner = foodpartner; //attach foodpartner to response object
    next();
  } catch (error) {
    return res.status(401).send({ message: "Invalid token" });
  }
}

module.exports={
    authFoodPartnerMiddleware,
}