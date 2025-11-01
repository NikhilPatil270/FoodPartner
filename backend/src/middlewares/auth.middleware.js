const foodPartnerModel = require("../models/foodpartner.model");
const userModel = require("../models/user.model");
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

async function authUserMiddleware(req, res, next) {
  const token = req.cookies.token; //get token from cookies
  if (!token) {
    return res.status(401).send({ message: "Please login first" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); //verify token
    const user = await userModel.findById(decoded.id);
    if (!user) {
      return res.status(401).send({ message: "User not found" });
    }
    req.user = user; //attach user to response object
    next();
  } catch {
    return res.status(401).send({ message: "Invalid token" });
  }
}

async function authAnyMiddleware(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).send({ message: "Please login first" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check user first
    const user = await userModel.findById(decoded.id);
    if (user) {
      req.user = user;
      return next();
    }

    // Check foodpartner
    const foodpartner = await foodPartnerModel.findById(decoded.id);
    if (foodpartner) {
      req.foodpartner = foodpartner;
      return next();
    }

    return res.status(401).send({ message: "No valid account found" });

  } catch(err) {
    return res.status(401).send({ message: "Invalid token" });
  }
}


module.exports = {
  authFoodPartnerMiddleware,
  authUserMiddleware,
  authAnyMiddleware
};
