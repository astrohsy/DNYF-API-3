let pool = require("./db-init");

const getEmailByUid = (uid) => {

    return new Promise((resolve, reject) => {

        pool.query(
            "SELECT email FROM Email WHERE uid = ?", 
            [uid], 
            (error, result, fields) => {
    
                if (error)
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
    
                resolve(result);
            });
        
    
    });


}

const getUidByEmail = (email) => {

    return new Promise((resolve, reject) => {

        pool.query(
            "SELECT uid FROM Email WHERE email = ?", 
            [email], 
            (error, result, fields) => {

                if (error) {
                    console.log(error);
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
                }

                resolve(result);
            });


    });

}

const getStatusByEmail = (email) => {
    return new Promise((resolve, reject) => {

        pool.query(
            "SELECT verified FROM Email WHERE email = ?",
            [email],
            (error, result, fields) => {

                if (error) {
                    console.log(error);
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
                }

                resolve(result);
            });


    });
}

const postEmail = (uid, email) => {
    return new Promise((resolve, reject) => {

        pool.query(
            "INSERT INTO Email (email, uid, verified) VALUES (?, ?, DEFAULT)",
            [email, uid],
            (error, result, fields) => {

                if (error) {
                    console.log(error);
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
                }

                result = {uid: uid, email: email, verified: false};

                resolve(result);
            });


    });
}

const updateStatusByEmail = (email, status) => {
    
    return new Promise((resolve, reject) => {

        pool.query(
            "UPDATE Email SET verified = ? WHERE email = ?",
            [status, email],
            (error, result, fields) => {

                if (error) {
                    console.log(error);
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
                }

                resolve(result);
            });


    });
}

const updateEmailByUid = (uid, email) => {

    return new Promise((resolve, reject) => {

        pool.query(
            "UPDATE Email SET email = ?, verified = DEFAULT(verified) WHERE uid = ?", 
            [email, uid], 
            (error, result, fields) => {
    
                if (error) {
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
                }

                resolve(result);
            });
        
    
    });

}

const deleteEmailByUid = (uid) => {

    return new Promise((resolve, reject) => {

        pool.query(
            "DELETE FROM Email WHERE uid = ?", 
            [uid], 
            (error, result, fields) => {
    
                if (error) {
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
                }

                resolve(result);
            });
        
    
    });

}

exports.postEmail = postEmail;
exports.getEmailByUid = getEmailByUid;
exports.getUidByEmail = getUidByEmail;
exports.getStatusByEmail = getStatusByEmail;
exports.updateEmailByUid = updateEmailByUid;
exports.updateStatusByEmail = updateStatusByEmail;
exports.deleteEmailByUid = deleteEmailByUid;
