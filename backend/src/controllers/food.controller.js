const foodModel = require("../models/food.model");
const storageService = require("../services/storage.service");
const { v4: uuid } = require("uuid");
const likeModel = require("../models/likes.model");

const saveModel = require("../models/save.model");

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
  const foodItem = await foodModel.find();
  res
    .status(200)
    .send({ message: "Food items fetched successfully", foodItem });
}

async function likeFood(req, res) {
  const { foodId } = req.body;
  const user = req.user;
  const isAlreadyLiked = await likeModel.findOne({
    user: user._id,
    food: foodId,
  });
if(isAlreadyLiked){
  await likeModel.deleteOne({
    user: user._id,
    food: foodId,
  })
  await foodModel.findByIdAndUpdate(foodId,{
    $inc:{likeCount:-1}
  })
  return res.status(200).json({
    message:"Food unliked successfully"
  })
}
const like =await likeModel.create({
  user: user._id,
    food: foodId,
})
await foodModel.findByIdAndUpdate(foodId,{
    $inc:{likeCount:1}
  })
return res.status(201).json({
    message:"Food liked successfully",like
  })

}

async function saveFood(req,res){
  const {foodId}=req.body;
  const user=req.user;
  const isAlreadySaved = await saveModel.findOne({
    user: user._id,
    food: foodId,
  });
  if(isAlreadySaved){
  await saveModel.deleteOne({
    user: user._id,
    food: foodId,
  })

  return res.status(200).json({
    message:"Food unsaved successfully"
  })
}
const save =await saveModel.create({
  user: user._id,
    food: foodId,
})

return res.status(201).json({
    message:"Food saved successfully",save
  })
}


async function getSavedFoodItems(req,res){
  const user=req.user;
  const savedFoods=await saveModel.find(
    {
      user:user._id,
    }
  ).populate('food')

  if(!savedFoods||savedFoods.length===0){
    return res.status(404).json({message:"No saved foods found"});
  }

   return res.status(200).json({message:"Saved foods retrived successfully",savedFoods});

}




module.exports = { createFood, getFoodItems,likeFood,saveFood ,getSavedFoodItems};
