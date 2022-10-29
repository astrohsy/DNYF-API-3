const express = require("express");
const emailRoutes = require("../sub-routes/email-routes");
const phoneRoutes = require("../sub-routes/phone-routes");

const router = express.Router();

router.use("/:uid?/email", (req, res, next) => {
    req.uid = req.params.uid;
    emailRoutes(req, res, next);
});

router.use("/:uid?/phone", (req, res, next) => {
    req.input = req.params.input;
    phoneRoutes(req, res, next);
});

router.use((error, req, res, next) => {
	if (res.headerSent) {
		return next(error);
	}
	res.status(error.code || 500);
	res.json({ message: error.message || "An unknown error occurred!" });
});

module.exports = router;