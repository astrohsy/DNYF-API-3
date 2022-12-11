const zipCodeQueries = require('../db/zip-code-queries');
const verifyService = require('../services/zip-code-verify-service');

const getZipCodeByUid = async (req, res, next) => {

    let uid = req.uid;

    zipCodeQueries.getZipCodeByUid(uid)
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

const getUidByZipCode = async (req, res, next) => {

    if (!(req.body && req.body.zip_code)) {
        res.status(400).json({message: "Request body is missing or invalid request format"});
        return;
    }

    let zip_code = req.body.zip_code;

    zipCodeQueries.getUidByZipCode(zip_code)
    .then((result) => {

        if (result.length == 0) {
            res.status(404).json({message: "UID does not exist"});
            return;
        }

        uid_list = result.map(x => x['uid']);

        res.status(200).json({data: {uid: uid_list}});
    })
    .catch((err) => {
        next(err);
    })

}

const getStatusByUid = async (req, res, next) => {

    if (!(req.uid)) {
        res.status(400).json({message: "Request body is missing or invalid request format"});
        return;
    }

    let uid = req.uid;

    zipCodeQueries.getStatusByUid(uid)
    .then((result) => {

        if (result.length == 0) {
            res.status(404).json({message: "Uid does not exist"});
            return;
        }

        result = result[0]['verified'];

        res.status(200).json({data: {verified: true ? result == 1 : false}});
    })
    .catch((err) => {
        next(err);
    })

};

const postZipCode = async (req, res, next) => {
    
    if (!(req.uid && req.body && req.body.zip_code)) {
        res.status(400).json({message: "Request body is missing or invalid request format"});
        return;
    }

    let uid = req.uid;
    let zip_code = req.body.zip_code;

    verifyService.verifyZipCode(zip_code)
    .then((valid) => {

        if (!valid) {
            res.status(404).json({message: "Invalid zip code"});
            return;
        }

        zipCodeQueries.postZipCode(uid, zip_code, valid)
        .then((result) => {

            if (result.length == 0) {
                res.status(404).json({message: "Zipcode does not exist"});
                return;
            }

            res.status(200).json({data: result});
        })
        .catch((err) => {
            next(err);
        })

    })
    .catch((err) => {
        next(err);
    })

};

const updateStatusByUid = async (req, res, next) => {

    if (!(req.uid && req.body && req.body.status !== undefined)) {
        res.status(400).json({message: "Request body is missing or invalid request format"});
        return;
    }

    let uid = req.uid;
    let status = 1 ? req.body.status === true : 0

    zipCodeQueries.updateStatusByUid(uid, status)
    .then((result) => {

        if (result.affectedRows == 0) {
            res.status(404).json({message: "Uid does not exist"});
            return;
        }

        res.status(200).send();
    })
    .catch((err) => {
        next(err);
    })

};

const updateZipCodeByUid = async (req, res, next) => {

    if (!(req.uid && req.body && req.body.zip_code !== undefined)) {
        res.status(400).json({message: "Request body is missing or invalid request format"});
        return;
    }

    let zip_code = req.body.zip_code;
    let uid = req.uid;

    zipCodeQueries.updateZipCodeByUid(uid, zip_code)
    .then((result) => {

        if (result.affectedRows == 0) {
            res.status(404).json({message: "User or zip code does not exist"});
            return;
        }

        res.status(200).send();
    })
    .catch((err) => {
        next(err);
    })

};

const deleteZipCodeByUid = async (req, res, next) => {

    if (!(req.uid !== undefined)) {
        res.status(400).json({message: "Request body is missing or invalid request format"});
        return;
    }

    let uid = req.uid;

    zipCodeQueries.deleteZipCodeByUid(uid)
    .then((result) => {

        if (result.affectedRows == 0) {
            res.status(404).json({message: "Zip code does not exist"});
            return;
        }

        res.status(200).send();
    })
    .catch((err) => {
        next(err);
    })

}

exports.postZipCode = postZipCode;
exports.getZipCodeByUid = getZipCodeByUid;
exports.getUidByZipCode = getUidByZipCode;
exports.getStatusByUid = getStatusByUid;
exports.updateZipCodeByUid = updateZipCodeByUid;
exports.updateStatusByUid = updateStatusByUid;
exports.deleteZipCodeByUid = deleteZipCodeByUid;