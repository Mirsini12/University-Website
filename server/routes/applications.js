const express = require("express");
const router = express.Router();

const {
    postApplication,
    getApplications,
    
}= require('../controllers/applicationControllers');

router.post("/",postApplication);
router.get("/",getApplications);



module.exports = router;