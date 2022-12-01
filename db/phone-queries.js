let pool = require("./db-init");

const getAllById = (uid) => {

    return new Promise((resolve, reject) => {

        pool.query(
            "SELECT * FROM Phone WHERE uid = ?", 
            [uid], 
            (error, results, fields) => {
    
                if (error)
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
    
                resolve(results);
            })
        
    
    })


}

const getPhoneById = (uid) => {

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

const getStatusByPhone = (phone) => {
    return new Promise((resolve, reject) => {

        pool.query(
            "SELECT verified FROM Phone WHERE phone_number = ?", 
            [phone], 
            (error, result, fields) => {
    
                if (error)
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
    
                resolve(result);
            });
        
    
    });
}

const postPhoneById = (phone, uid) => {
    return new Promise((resolve, reject) => {

        pool.query(
            "INSERT INTO Phone (phone_number, uid, verified) VALUES (?, ?, DEFAULT)", 
            [phone, uid], 
            (error, result, fields) => {
    
                if (error)
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
                
                result = {uid: uid, phone: phone, verified: false};

                resolve(result);
            });
        
    
    });
}

const updateStatusByPhone = (phone, status) => {
    return new Promise((resolve, reject) => {

        pool.query(
            "UPDATE Phone SET verified = ? WHERE phone_number = ?", 
            [status, phone], 
            (error, result, fields) => {
    
                if (error) {
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
                }

                resolve(result);
            });
        
    
    });
}

exports.getAllById = getAllById;
exports.getPhoneById = getPhoneById;
exports.getStatusByPhone = getStatusByPhone;
exports.postPhoneById = postPhoneById;
exports.updateStatusByPhone = updateStatusByPhone;