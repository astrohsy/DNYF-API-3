const emailQueries = require('../db/email-queries')



const postRecord = async (req, res, next) => {
    
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

exports.postRecord = postRecord;