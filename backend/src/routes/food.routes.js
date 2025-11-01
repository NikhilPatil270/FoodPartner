
const express=require("express");
const foodController=require('../controllers/food.controller');
const authMiddleware=require('../middlewares/auth.middleware');
const router=express.Router();

//express server cant read files(img,vid,pdf) directly so we use multer
const multer = require('multer');
// to save videos/images in memory buffer
const upload=multer({
    storage:multer.memoryStorage(),
})

// post /api/food/ [protected]
router.post('/',authMiddleware.authFoodPartnerMiddleware,upload.single("video"),foodController.createFood);//pehle auth krwaya fir food create krwaya

/* get /api/food/ [Protected] */
router.get('/',authMiddleware.authAnyMiddleware,foodController.getFoodItems)//fetch food


router.post('/like',authMiddleware.authUserMiddleware,foodController.likeFood)

router.post('/save',authMiddleware.authUserMiddleware,foodController.saveFood)

router.get('/save',authMiddleware.authUserMiddleware,foodController.getSavedFoodItems)

module.exports=router;