USE usof;

CREATE TABLE IF NOT EXISTS tokens (
    id INT(11) AUTO_INCREMENT,
    login VARCHAR(31) NOT NULL UNIQUE,
    refreshTocken VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);