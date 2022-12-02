const emailQueries = require('../db/email-queries')

const getEmailByUid = async (req, res, next) => {

    let uid = req.uid;

    emailQueries.getEmailByUid(uid)
    .then((result) => {
        
        if (result.length == 0) {
            res.status(404).json({message: "UID does not exist"});
            return;
        }

        result = result[0]

        res.status(200).send({data: result});
    })
    .catch((err) => {
        next(err);
    })

};

const getUidByEmail = async (req, res, next) => {

    if (!(req.body && req.body.email)) {
        res.status(400).json({message: "Request body is missing or invalid request format"});
        return;
    }

    let email = req.body.email;

    emailQueries.getUidByEmail(email)
    .then((result) => {

        if (result.length == 0) {
            res.status(404).json({message: "UID does not exist"});
            return;
        }

        result = result[0];

        res.status(200).json({data: result});
    })
    .catch((err) => {
        next(err);
    })

}

const getStatusByEmail = async (req, res, next) => {

    if (!(req.body && req.body.email)) {
        res.status(400).json({message: "Request body is missing or invalid request format"});
        return;
    }

    let email = req.body.email;

    emailQueries.getStatusByEmail(email)
    .then((result) => {

        if (result.length == 0) {
            res.status(404).json({message: "Email does not exist"});
            return;
        }

        result = result[0]['verified'];

        res.status(200).json({data: {verified: true ? result == 1 : false}});
    })
    .catch((err) => {
        next(err);
    })

};

const postEmail = async (req, res, next) => {
    
    if (!(req.uid && req.body && req.body.email)) {
        res.status(400).json({message: "Request body is missing or invalid request format"});
        return;
    }

    let uid = req.uid;
    let email = req.body.email;

    emailQueries.postEmail(uid, email)
    .then((result) => {

        if (result.length == 0) {
            res.status(404).json({message: "Email does not exist"});
            return;
        }

        res.status(200).json({data: result});
    })
    .catch((err) => {
        next(err);
    })

};

const updateStatusByEmail = async (req, res, next) => {

    if (!(req.body && req.body.email && req.body.status !== undefined)) {
        res.status(400).json({message: "Request body is missing or invalid request format"});
        return;
    }

    let email = req.body.email;
    let status = 1 ? req.body.status === true : 0

    emailQueries.updateStatusByEmail(email, status)
    .then((result) => {

        if (result.affectedRows == 0) {
            res.status(404).json({message: "Email does not exist"});
            return;
        }

        res.status(200).send();
    })
    .catch((err) => {
        next(err);
    })

};

const updateEmailByUid = async (req, res, next) => {

    if (!(req.uid && req.body && req.body.email !== undefined)) {
        res.status(400).json({message: "Request body is missing or invalid request format"});
        return;
    }

    let email = req.body.email;
    let uid = req.uid;

    emailQueries.updateEmailByUid(uid, email)
    .then((result) => {

        if (result.affectedRows == 0) {
            res.status(404).json({message: "User or email does not exist"});
            return;
        }

        res.status(200).send();
    })
    .catch((err) => {
        next(err);
    })

};

const deleteEmailByUid = async (req, res, next) => {

    if (!(req.uid !== undefined)) {
        res.status(400).json({message: "Request body is missing or invalid request format"});
        return;
    }

    let uid = req.uid;

    emailQueries.deleteEmailByUid(uid)
    .then((result) => {

        if (result.affectedRows == 0) {
            res.status(404).json({message: "Email does not exist"});
            return;
        }

        res.status(200).send();
    })
    .catch((err) => {
        next(err);
    })

}

exports.getEmailByUid = getEmailByUid;
exports.getUidByEmail = getUidByEmail;
exports.getStatusByEmail = getStatusByEmail;
exports.postEmail = postEmail;
exports.updateStatusByEmail = updateStatusByEmail;
exports.updateEmailByUid = updateEmailByUid;
exports.deleteEmailByUid = deleteEmailByUid;