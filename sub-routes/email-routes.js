const express = require("express");
const emailController = require("../controllers/email-controller");

const router = express.Router();

router.get("/", emailController.getEmailById);

router.post("/", emailController.postEmailById);

router.get("/status", emailController.getStatusByEmail);

router.post("/status", emailController.postStatusByEmail);


module.exports = router;