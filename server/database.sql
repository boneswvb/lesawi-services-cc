/* Users database */

CREATE DATABASE logon;

/* Users table */

CREATE TABLE form
(
  u_id SERIAL PRIMARY KEY,
  
);

/*Insert 3 sets of data int the table for testing*/

INSERT INTO users
  (fullname, email)
VALUES
  ('Wim von Benecke','email@email1.com');

INSERT INTO users
  (fullname, email)
VALUES
  ('Wim von Benecke','email@email1.com');

INSERT INTO users
  (fullname, email)
VALUES
  ('Wim von Benecke','email@email1.com');
