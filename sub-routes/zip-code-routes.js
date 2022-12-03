const express = require("express");
const zipCodeController = require("../controllers/zip-code-controller");

const router = express.Router();

router.get("/", zipCodeController.getZipCodeByUid);

router.get("/uid", zipCodeController.getUidByZipCode);

router.get("/status", zipCodeController.getStatusByUid);

router.post("/", zipCodeController.postZipCode);

router.put("/", zipCodeController.updateZipCodeByUid);

router.put("/status", zipCodeController.updateStatusByUid);

router.delete("/", zipCodeController.deleteZipCodeByUid);

module.exports = router;