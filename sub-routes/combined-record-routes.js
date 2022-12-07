const express = require("express");
const recordController = require("../controllers/combined-record-controller");

const router = express.Router();

router.post("/", recordController.postRecord);

module.exports = router;