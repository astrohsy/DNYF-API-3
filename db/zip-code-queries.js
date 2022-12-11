let pool = require("./db-init");

const getZipCodeByUid = (uid) => {

    return new Promise((resolve, reject) => {

        pool.query(
            "SELECT zip_code FROM ZipCode WHERE uid = ?", 
            [uid], 
            (error, result, fields) => {
    
                if (error)
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
    
                resolve(result);
            });
        
    
    });


}

const getUidByZipCode = (zip_code) => {

    return new Promise((resolve, reject) => {

        pool.query(
            "SELECT uid FROM ZipCode WHERE zip_code = ?", 
            [zip_code], 
            (error, result, fields) => {
    
                if (error)
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
    
                resolve(result);
            });
        
    
    });

}

const getStatusByUid = (uid) => {
    return new Promise((resolve, reject) => {

        pool.query(
            "SELECT verified FROM ZipCode WHERE uid = ?", 
            [uid], 
            (error, result, fields) => {
    
                if (error)
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
    
                resolve(result);
            });
        
    
    });
}

const postZipCode = (uid, zip_code, valid) => {
    return new Promise((resolve, reject) => {

        let verified = 1 ? valid : 0;

        pool.query(
            "INSERT INTO ZipCode (zip_code, uid, verified) VALUES (?, ?, ?)", 
            [zip_code, uid, verified], 
            (error, result, fields) => {
    
                if (error)
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
                
                result = {uid: uid, zip_code: zip_code, verified: valid};

                resolve(result);
            });
        
    
    });
}

const updateStatusByUid = (uid, status) => {
    
    return new Promise((resolve, reject) => {

        pool.query(
            "UPDATE Email SET verified = ? WHERE uid = ?", 
            [status, uid], 
            (error, result, fields) => {
    
                if (error) {
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
                }

                resolve(result);
            });
        
    
    });
}

const updateZipCodeByUid = (uid, zip_code, valid) => {

    return new Promise((resolve, reject) => {

        let verified = 1 ? valid : 0;

        pool.query(
            "UPDATE ZipCode SET zip_code = ?, verified = ? WHERE uid = ?", 
            [zip_code, verified, uid], 
            (error, result, fields) => {
    
                if (error) {
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
                }

                resolve(result);
            });
        
    
    });

}

const deleteZipCodeByUid = (uid) => {

    return new Promise((resolve, reject) => {

        pool.query(
            "DELETE FROM ZipCode WHERE uid = ?", 
            [uid], 
            (error, result, fields) => {
    
                if (error) {
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
                }

                resolve(result);
            });
        
    
    });

}

exports.postZipCode = postZipCode;
exports.getZipCodeByUid = getZipCodeByUid;
exports.getUidByZipCode = getUidByZipCode;
exports.getStatusByUid = getStatusByUid;
exports.updateZipCodeByUid = updateZipCodeByUid;
exports.updateStatusByUid = updateStatusByUid;
exports.deleteZipCodeByUid = deleteZipCodeByUid;