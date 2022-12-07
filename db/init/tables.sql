CREATE TABLE Email (
    email VARCHAR(128) NOT NULL,
    verified TINYINT NOT NULL DEFAULT 0, 
    uid VARCHAR(50),
    UNIQUE(email),
    PRIMARY KEY(uid)
);

CREATE TABLE Phone (
    phone_number VARCHAR(16) NOT NULL,
    verified TINYINT NOT NULL DEFAULT 0, 
    uid VARCHAR(50),
    UNIQUE(phone_number),
    PRIMARY KEY(uid)
);

CREATE TABLE ZipCode (
    zip_code VARCHAR(5) NOT NULL,
    verified TINYINT NOT NULL DEFAULT 0, 
    uid VARCHAR(50),
    PRIMARY KEY(uid)
);