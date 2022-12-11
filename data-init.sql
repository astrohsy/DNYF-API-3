USE dnyf-contacts-db;
DROP TABLE IF EXISTS Email;
DROP TABLE IF EXISTS Phone;
DROP TABLE IF EXISTS ZipCode;


CREATE TABLE IF NOT EXISTS Email (
    email VARCHAR(128) NOT NULL,
    verified TINYINT NOT NULL DEFAULT 0, 
    uid VARCHAR(50),
    UNIQUE(email),
    PRIMARY KEY(uid)
);

CREATE TABLE IF NOT EXISTS Phone (
    phone_number VARCHAR(16) NOT NULL,
    verified TINYINT NOT NULL DEFAULT 0, 
    uid VARCHAR(50),
    UNIQUE(phone_number),
    PRIMARY KEY(uid)
);

CREATE TABLE IF NOT EXISTS ZipCode (
    zip_code VARCHAR(5) NOT NULL,
    verified TINYINT NOT NULL DEFAULT 0, 
    uid VARCHAR(50),
    PRIMARY KEY(uid)
);

INSERT INTO Email (uid, email, verified)
VALUES ("sample1", "test1@email.com", 0);

INSERT INTO Email (uid, email, verified)
VALUES ("sample2", "test2@email.com", 0);

INSERT INTO Email (uid, email, verified)
VALUES ("sample3", "test3@email.com", 1);

INSERT INTO Email (uid, email, verified)
VALUES ("sample4", "test4@email.com", 1);

INSERT INTO Email (uid, email, verified)
VALUES ("sample5", "test5@email.com", 0);

INSERT INTO Phone (uid, phone_number, verified)
VALUES ("sample1", "1231231234", 1);

INSERT INTO Phone (uid, phone_number, verified)
VALUES ("sample2", "2342342345", 0);

INSERT INTO Phone (uid, phone_number, verified)
VALUES ("sample3", "3453453456", 0);

INSERT INTO Phone (uid, phone_number, verified)
VALUES ("sample4", "4564564567", 1);

INSERT INTO Phone (uid, phone_number, verified)
VALUES ("sample5", "5675675678", 0);

INSERT INTO ZipCode (uid, zip_code, verified)
VALUES ("sample1", "11111", 1);

INSERT INTO ZipCode (uid, zip_code, verified)
VALUES ("sample2", "22222", 1);

INSERT INTO ZipCode (uid, zip_code, verified)
VALUES ("sample3", "11111", 1);

INSERT INTO ZipCode (uid, zip_code, verified)
VALUES ("sample4", "33333", 0);

INSERT INTO ZipCode (uid, zip_code, verified)
VALUES ("sample5", "11111", 0);