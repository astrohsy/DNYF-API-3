const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({uid: req.uid})
});

module.exports = router;