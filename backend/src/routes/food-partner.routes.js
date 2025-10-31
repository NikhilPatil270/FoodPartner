const express=require("express");
const authMiddleware=require('../middlewares/auth.middleware');
const foodController=require('../controllers/food.controller');
const router=express.Router();

/* get /api/foodpartner/:foodPartnerId [Protected] */
router.get('/:id',authMiddleware.authUserMiddleware,foodController.getFoodPartnerById)


module.exports=router;