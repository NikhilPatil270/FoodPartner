const foodModel = require("../models/food.model");
const storageService = require("../services/storage.service");
const { v4: uuid } = require("uuid");

async function createFood(req, res) {
  const fileUploadResult = await storageService.uploadFile(
    req.file.buffer,
    uuid()
  );

  const foodItem = await foodModel.create({
    name: req.body.name,
    description: req.body.description,
    video: fileUploadResult.url,
    foodPartner: req.foodpartner._id,
  });
  res.status(201).send({ message: "Food item created successfully", foodItem });
}

async function getFoodItems(req, res) {
  const foodItem=await foodModel.find();
  res.status(200).send({message:"Food items fetched successfully",foodItem});
}

module.exports = { createFood,getFoodItems };
