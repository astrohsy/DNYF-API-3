const emailQueries = require('../db/email-queries')

const getAllById = async (req, res, next) => {

    let uid = req.uid;

    emailQueries.getAllById(uid)
    .then((result) => {
        res.status(200).json({result: result});
    })
    .catch((err) => {
        next(err);
    })

};

exports.getEmailById = getAllById;
