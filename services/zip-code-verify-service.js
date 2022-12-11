const https = require('https');

const API_ENTRY_POINT = "https://api.zippopotam.us/us/"

const verifyZipCode = (zip_code) => {
    
    let url = API_ENTRY_POINT + zip_code;


    return new Promise((resolve, reject) => {

        https.get(url, (res) => {

            if (res.statusCode == 200)
                resolve(true)
            
            if (res.statusCode == 404)
                resolve(false)
            
            reject(new Error("Something went wrong when verifying zip code"));

        }).on('error', (err) => {
            reject(new Error("Something went wrong when verifying zip code"));
        })

    });
};

exports.verifyZipCode = verifyZipCode;