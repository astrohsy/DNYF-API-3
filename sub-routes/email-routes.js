const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({uid: req.uid})
});

router.post("/", (req, res, next) => {
    res.status(200).json({uid: req.uid})
});

router.get("/verify", (req, res, next) => {
    res.status(200).json({uid: req.uid})
});

router.post("/verify", (req, res, next) => {
    res.status(200).json({uid: req.uid})
});

router.get("/status", (req, res, next) => {
    res.status(200).json({uid: req.uid})
});

router.post("/status", (req, res, next) => {
    res.status(200).json({uid: req.uid})
});

module.exports = router;