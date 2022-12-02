const express = require("express");
const emailController = require("../controllers/email-controller");

const router = express.Router();

router.get("/", emailController.getEmailByUid);

router.get("/uid", emailController.getUidByEmail);

router.get("/status", emailController.getStatusByEmail);

router.post("/", emailController.postEmail);

router.put("/", emailController.updateEmailByUid);

router.put("/status", emailController.updateStatusByEmail);

router.delete("/", emailController.deleteEmailByUid);

module.exports = router;