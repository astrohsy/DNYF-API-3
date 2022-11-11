const express = require("express");
const emailController = require("../controllers/email-controller");

const router = express.Router();

router.get("/", emailController.getEmailById);

router.post("/", emailController.postEmailById);

router.get("/status", emailController.getStatusByEmail);

router.put("/status", emailController.updateStatusByEmail);


module.exports = router;