
const express = require("express");
const authorize=require('../authorize')
const router = express.Router();
const {
    getAdmins,
    postAdmins,
    loginAdmin,
    deleteAdmin
}=require ('../controllers/adminControllers');

router.get("/",authorize,getAdmins)
router.post("/",authorize,postAdmins)
router.post("/login",loginAdmin)
router.delete("/:id",authorize,deleteAdmin);

module.exports = router;