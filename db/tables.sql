use `COMS6156-contacts-db`;

CREATE TABLE User (
	uid INT, 
    PRIMARY KEY (uid)
);

CREATE TABLE Email (
	email VARCHAR(128) NOT NULL,
    verified TINYINT NOT NULL DEFAULT 0, 
    uid INT,
    UNIQUE(email),
    PRIMARY KEY (uid, email),
    FOREIGN KEY (uid) REFERENCES User(uid) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Phone (
	phone_number VARCHAR(16) NOT NULL,
    verified TINYINT NOT NULL DEFAULT 0, 
    uid INT,
    UNIQUE(phone_number),
    PRIMARY KEY (uid, phone_number),
    FOREIGN KEY (uid) REFERENCES User(uid) ON UPDATE CASCADE ON DELETE CASCADE
);