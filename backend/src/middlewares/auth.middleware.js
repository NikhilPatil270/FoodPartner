const foodPartnerModel = require("../models/foodpartner.model");
const jwt = require("jsonwebtoken");

async function authFoodPartnerMiddleware(req,res,next) {
    const token=req.cookoies.token;
    if(!token){
        return res.status(401).send({message:"Please login first"});
    }
}