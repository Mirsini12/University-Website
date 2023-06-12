const express = require("express");
const authorize=require("../authorize")
const router = express.Router();

const {
    postVacancies,
    getVacancies,
    deleteVacancy,
    updateVacancy
}= require('../controllers/vacanciesControllers');

router.post("/",authorize,postVacancies);
router.get("/",getVacancies);
router.put("/:id",authorize,updateVacancy);
router.delete("/:id",authorize,deleteVacancy);


module.exports = router;