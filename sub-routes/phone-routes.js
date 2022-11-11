const express = require("express");
const phoneController = require("../controllers/phone-controller");

const router = express.Router();

router.get("/", phoneController.getPhoneById);

router.post("/", phoneController.postPhoneById);

router.get("/status", phoneController.getStatusByPhone);

router.put("/status", phoneController.updateStatusByPhone);


module.exports = router;