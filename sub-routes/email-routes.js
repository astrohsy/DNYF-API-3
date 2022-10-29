const express = require("express");
const emailController = require("../controllers/email-controller");

const router = express.Router();

router.get("/", emailController.getEmailById);

router.post("/", emailController.postEmailById);

router.post("/verify", (req, res, next) => {
    res.status(200).json({uid: req.uid})
});

router.get("/status", emailController.getStatusByEmail);

module.exports = router;