const emailQueries = require('../db/email-queries')

const getAllById = async (req, res, next) => {

    let uid = req.input;

    emailQueries.getAllById(uid)
    .then((result) => {
        res.status(200).json({result: result});
    })
    .catch((err) => {
        next(err);
    })

};

const getEmailById = async (req, res, next) => {

    let uid = req.input;

    emailQueries.getEmailById(uid)
    .then((result) => {
        
        if (result.length == 0) {
            throw new Error("UID does not exist");
        }

        result = result.map(x => x['email']);

        res.status(200).json({result: result});
    })
    .catch((err) => {
        next(err);
    })

};

const getStatusByEmail = async (req, res, next) => {

    let email = req.input;

    emailQueries.getStatusByEmail(email)
    .then((result) => {

        if (result.length == 0) {
            throw new Error("Email does not exist");
        }

        result = result[0]['verified'];

        res.status(200).json({result: true ? result == 1 : false});
    })
    .catch((err) => {
        next(err);
    })

};

exports.getEmailById = getEmailById;
exports.getStatusByEmail = getStatusByEmail;
