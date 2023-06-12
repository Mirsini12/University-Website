const express = require("express");
const authorize=require("../authorize")
const router = express.Router();

const {
    postJournals,
    getJournals,
    deleteJournal,
    updateJournal
}= require('../controllers/journalsControllers');

router.post("/",authorize,postJournals);
router.get("/",getJournals);
router.put("/:id",authorize,updateJournal);
router.delete("/:id",authorize,deleteJournal);


module.exports = router;