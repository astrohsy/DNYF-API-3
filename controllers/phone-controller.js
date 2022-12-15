const phoneQueries = require('../db/phone-queries')

const getPhoneByUid = async (req, res, next) => {

    let uid = req.uid;

    phoneQueries.getPhoneByUid(uid)
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

const getUidByPhone = async (req, res, next) => {

    if (!(req.body && req.body.phone_number)) {
        res.status(400).json({message: "Request body is missing or invalid request format"});
        return;
    }

    let phone_number = req.body.phone_number;

    phoneQueries.getUidByPhone(phone_number)
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

const getStatusByPhone = async (req, res, next) => {

    if (!(req.body && req.body.phone_number)) {
        res.status(400).json({message: "Request body is missing or invalid request format"});
        return;
    }

    let phone_number = req.body.phone_number;

    phoneQueries.getStatusByPhone(phone_number)
    .then((result) => {

        if (result.length == 0) {
            res.status(404).json({message: "Phone number does not exist"});
            return;
        }

        result = result[0]['verified'];

        res.status(200).json({data: {verified: true ? result == 1 : false}});
    })
    .catch((err) => {
        next(err);
    })

};

const postPhone = async (req, res, next) => {
    
    if (!(req.uid && req.body && req.body.phone_number)) {
        res.status(400).json({message: "Request body is missing or invalid request format"});
        return;
    }

    let uid = req.uid;
    let phone_number = req.body.phone_number;

    phoneQueries.postPhone(uid, phone_number)
    .then((result) => {

        if (result.length == 0) {
            res.status(404).json({message: "Phone number does not exist"});
            return;
        }

        res.status(200).json({data: result});
    })
    .catch((err) => {
        next(err);
    })

};

const updateStatusByPhone = async (req, res, next) => {

    if (!(req.body && req.body.phone_number && req.body.status !== undefined)) {
        res.status(400).json({message: "Request body is missing or invalid request format"});
        return;
    }

    let phone_number = req.body.phone_number;
    let status = 1 ? req.body.status === true : 0

    phoneQueries.updateStatusByPhone(phone_number, status)
    .then((result) => {

        if (result.affectedRows == 0) {
            res.status(404).json({message: "Phone number does not exist"});
            return;
        }

        res.status(200).send();
    })
    .catch((err) => {
        next(err);
    })

};

const updatePhoneByUid = async (req, res, next) => {

    if (!(req.uid && req.body && req.body.phone_number !== undefined)) {
        res.status(400).json({message: "Request body is missing or invalid request format"});
        return;
    }

    let phone_number = req.body.phone_number;
    let uid = req.uid;

    phoneQueries.updatePhoneByUid(uid, phone_number)
    .then((result) => {

        if (result.affectedRows == 0) {
            res.status(404).json({message: "User or phone number does not exist"});
            return;
        }

        res.status(200).send();
    })
    .catch((err) => {
        next(err);
    })

};

const deletePhoneByUid = async (req, res, next) => {

    if (!(req.uid !== undefined)) {
        res.status(400).json({message: "Request body is missing or invalid request format"});
        return;
    }

    let uid = req.uid;

    phoneQueries.deletePhoneByUid(uid)
    .then((result) => {

        if (result.affectedRows == 0) {
            res.status(404).json({message: "Phone number does not exist"});
            return;
        }

        res.status(200).send();
    })
    .catch((err) => {
        next(err);
    })

}

exports.getPhoneByUid = getPhoneByUid;
exports.getUidByPhone = getUidByPhone;
exports.getStatusByPhone = getStatusByPhone;
exports.postPhone = postPhone;
exports.updateStatusByPhone = updateStatusByPhone;
exports.updatePhoneByUid = updatePhoneByUid;
exports.deletePhoneByUid = deletePhoneByUid;