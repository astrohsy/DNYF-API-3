const zipCodeQueries = require('../db/zip-code-queries');

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

        uid_list = result[0];

        res.status(200).json({data: result});
    })
    .catch((err) => {
        next(err);
    })

}