let pool = require("./db-init");

const getPhoneByUid = (uid) => {

    return new Promise((resolve, reject) => {

        pool.query(
            "SELECT phone_number FROM Phone WHERE uid = ?", 
            [uid], 
            (error, result, fields) => {
    
                if (error)
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
    
                resolve(result);
            });
        
    
    });


}

const getUidByPhone = (phone_number) => {

    return new Promise((resolve, reject) => {

        pool.query(
            "SELECT uid FROM Phone WHERE phone_number = ?", 
            [phone_number], 
            (error, result, fields) => {
    
                if (error)
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
    
                resolve(result);
            });
        
    
    });

}

const getStatusByPhone = (phone_number) => {
    return new Promise((resolve, reject) => {

        pool.query(
            "SELECT verified FROM Phone WHERE phone_number = ?", 
            [phone_number], 
            (error, result, fields) => {
    
                if (error)
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
    
                resolve(result);
            });
        
    
    });
}

const postPhone = (uid, phone_number) => {
    return new Promise((resolve, reject) => {

        pool.query(
            "INSERT INTO Phone (phone_number, uid, verified) VALUES (?, ?, DEFAULT)", 
            [phone_number, uid], 
            (error, result, fields) => {
    
                if (error)
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
                
                result = {uid: uid, phone_number: phone_number, verified: false};

                resolve(result);
            });
        
    
    });
}

const updateStatusByPhone = (phone_number, status) => {
    
    return new Promise((resolve, reject) => {

        pool.query(
            "UPDATE Phone SET verified = ? WHERE phone_number = ?", 
            [status, phone_number], 
            (error, result, fields) => {
    
                if (error) {
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
                }

                resolve(result);
            });
        
    
    });
}

const updatePhoneByUid = (uid, phone_number) => {

    return new Promise((resolve, reject) => {

        pool.query(
            "UPDATE Phone SET phone_number = ?, verified = DEFAULT(verified) WHERE uid = ?", 
            [phone_number, uid], 
            (error, result, fields) => {
    
                if (error) {
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
                }

                resolve(result);
            });
        
    
    });

}

const deletePhoneByUid = (uid) => {

    return new Promise((resolve, reject) => {

        pool.query(
            "DELETE FROM Phone WHERE uid = ?", 
            [uid], 
            (error, result, fields) => {
    
                if (error) {
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
                }

                resolve(result);
            });
        
    
    });

}

exports.postPhone = postPhone;
exports.getPhoneByUid = getPhoneByUid;
exports.getUidByPhone = getUidByPhone;
exports.getStatusByPhone = getStatusByPhone;
exports.updatePhoneByUid = updatePhoneByUid;
exports.updateStatusByPhone = updateStatusByPhone;
exports.deletePhoneByUid = deletePhoneByUid;