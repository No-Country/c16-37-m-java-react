INSERT INTO roles (name) VALUES ('CUSTOMER');
INSERT INTO roles (name) VALUES ('ADMIN')


INSERT INTO users (id, username, first_name, last_name, email, number, password) VALUES (1, 'chris', 'christian', 'hernandez', 'chris@gmail.com', '1234567890', '$2a$10$ywh1O2EwghHmFIMGeHgsx.9lMw5IXpg4jafeFS.Oi6nFv0181gHli');
INSERT INTO users (id, username, first_name, last_name, email, number, password) VALUES (2, 'admin', 'admin', 'admin', 'admin@gmail.com', '1234567890', '$2a$10$ywh1O2EwghHmFIMGeHgsx.9lMw5IXpg4jafeFS.Oi6nFv0181gHli');

INSERT INTO user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO user_role (user_id, role_id) VALUES (2, 2);