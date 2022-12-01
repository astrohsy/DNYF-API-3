use `COMS6156-contacts-db`;

CREATE TABLE Email (
    email VARCHAR(128) NOT NULL,
    verified TINYINT NOT NULL DEFAULT 0, 
    uid INT,
    UNIQUE(email),
    PRIMARY KEY(uid)
);

CREATE TABLE Phone (
    phone_number VARCHAR(16) NOT NULL,
    verified TINYINT NOT NULL DEFAULT 0, 
    uid INT,
    UNIQUE(phone_number),
    PRIMARY KEY(uid)
);

CREATE TABLE ZipCode (
    zip_code VARCHAR(5) NOT NULL,
    verified TINYINT NOT NULL DEFAULT 0, 
    uid INT,
    PRIMARY KEY(uid)
);