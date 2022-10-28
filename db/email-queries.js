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

exports.getAllById = getAllById;