CREATE DATABASE database_ross;

USE database_ross;

--Users table
CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL, 
    password varchar(60) NOT NULL,
    email varchar(100) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users 
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE users;

--Links tables
CREATE TABLE notes(
    id INT(11) NOT NULL,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    user_id INT(11),
    created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE notes
    ADD PRIMARY KEY (id);

ALTER TABLE notes
    MODIFY created_at timestamp NOT NULL DEFAULT current_timestamp;

ALTER TABLE notes
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;