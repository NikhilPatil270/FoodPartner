const express=require("express");
const authMiddleware=require('../middlewares/auth.middleware');
const foodPartnerController=require('../controllers/food-partner.controller');
const router=express.Router();

/* get /api/foodpartner/:foodPartnerId [Protected] */
router.get('/:id',authMiddleware.authUserMiddleware,foodPartnerController.getFoodPartnerById)


module.exports=router;