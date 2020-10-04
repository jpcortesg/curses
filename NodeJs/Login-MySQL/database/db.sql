use logintomysql;

CREATE TABLE users(
  id INT(11) NOT NULL,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL
);

ALTER TABLE users
  ADD PRIMARY KEY (id);
  
ALTER TABLE users
  MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;
  
describe users;