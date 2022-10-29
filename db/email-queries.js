let pool = require("./db");

const getAllById = (uid) => {

    return new Promise((resolve, reject) => {

        pool.query(
            "SELECT * FROM Email WHERE uid = ?", 
            [uid], 
            (error, results, fields) => {
    
                if (error)
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
    
                resolve(results);
            })
        
    
    })


}

const getEmailById = (uid) => {

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

const getStatusByEmail = (email) => {
    return new Promise((resolve, reject) => {

        pool.query(
            "SELECT verified FROM Email WHERE email = ?", 
            [email], 
            (error, result, fields) => {
    
                if (error)
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
    
                resolve(result);
            });
        
    
    });
}

const postEmailById = (email, uid) => {
    return new Promise((resolve, reject) => {

        pool.query(
            "INSERT INTO Email (email, uid, verified) VALUES (?, ?, DEFAULT)", 
            [email, uid], 
            (error, result, fields) => {
    
                if (error)
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
                
                result = {uid: uid, email: email, verified: false};

                resolve(result);
            });
        
    
    });
}

const postStatusByEmail = (email, status) => {
    return new Promise((resolve, reject) => {

        pool.query(
            "UPDATE Email SET verified = ? WHERE email = ?", 
            [status, email], 
            (error, result, fields) => {
    
                if (error) {
                    console.log(error.sqlMessage);
                    reject(new Error(error.sqlMessage ? error.sqlMessage : "Something went wrong while connecting to database"));
                }

                resolve(result);
            });
        
    
    });
}

exports.getAllById = getAllById;
exports.getEmailById = getEmailById;
exports.getStatusByEmail = getStatusByEmail;
exports.postEmailById = postEmailById;
exports.postStatusByEmail = postStatusByEmail;