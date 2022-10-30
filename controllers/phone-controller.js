const phoneQueries = require('../db/phone-queries')

const getAllById = async (req, res, next) => {

    let uid = req.uid;

    phoneQueries.getAllById(uid)
    .then((result) => {
        res.status(200).send(result);
    })
    .catch((err) => {
        next(err);
    })

};

const getPhoneById = async (req, res, next) => {

    let uid = req.uid;

    phoneQueries.getPhoneById(uid)
    .then((result) => {
        
        if (result.length == 0) {
            throw new Error("UID does not exist");
        }

        result = result.map(x => x['phone_number']);

        res.status(200).send(result);
    })
    .catch((err) => {
        next(err);
    })

};

const getStatusByPhone = async (req, res, next) => {

    if (!(req.body && req.body.phone)) {
        return next(new Error("Request body is missing or invalid request format"));
    }

    let phone = req.body.phone;

    phoneQueries.getStatusByPhone(phone)
    .then((result) => {

        if (result.length == 0) {
            throw new Error("Phone number does not exist");
        }

        result = result[0]['verified'];

        res.status(200).json({verified: true ? result == 1 : false});
    })
    .catch((err) => {
        next(err);
    })

};

const postPhoneById = async (req, res, next) => {

    if (!(req.body && req.body.phone)) {
        return next(new Error("Request body is missing or invalid request format"));
    }

    let phone = req.body.phone;
    let uid  = req.uid;

    phoneQueries.postPhoneById(phone, uid)
    .then((result) => {

        res.status(200).json(result);
    })
    .catch((err) => {
        next(err);
    })
};

const postStatusByPhone = async (req, res, next) => {

    if (!(req.body && req.body.phone && req.body.status)) {
        return next(new Error("Request body is missing or invalid request format"));
    }

    let phone = req.body.phone;
    let status = 1 ? req.body.status === true : 0

    phoneQueries.postStatusByPhone(phone, status)
    .then((result) => {

        if (result.affectedRows == 0)
            return next(new Error("Phone number not found"))

        res.status(200).send();
    })
    .catch((err) => {
        next(err);
    })
}

exports.getAllById = getAllById;
exports.getPhoneById = getPhoneById;
exports.getStatusByPhone = getStatusByPhone;
exports.postPhoneById = postPhoneById;
exports.postStatusByPhone = postStatusByPhone;
