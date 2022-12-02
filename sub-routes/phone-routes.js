const express = require("express");
const phoneController = require("../controllers/phone-controller");

const router = express.Router();

router.get("/", phoneController.getPhoneByUid);

router.get("/uid", phoneController.getUidByPhone);

router.get("/status", phoneController.getStatusByPhone);

router.post("/", phoneController.postPhone);

router.put("/", phoneController.updatePhoneByUid);

router.put("/status", phoneController.updateStatusByPhone);

router.delete("/", phoneController.deletePhoneByUid);



module.exports = router;