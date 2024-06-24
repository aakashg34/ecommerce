-- src/main/resources/data.sql

-- Insert initial users
INSERT INTO users (username, password) VALUES ('user1', '$2a$10$u1/QRm1USc5t6o/U6or3OeLk6X1G1kEq9I3K3Vz3zJZ9QvTnPt.Ky'); -- password: password1
INSERT INTO users (username, password) VALUES ('user2', '$2a$10$VzZzVc6boerE/ToV1c5qEeyu3E5vcn4v1r3Vv1U5EZ9Vn3nV5K6F2'); -- password: password2

-- Insert initial products
INSERT INTO products (name, description, price) VALUES ('Product 1', 'Description for product 1', 10.00);
INSERT INTO products (name, description, price) VALUES ('Product 2', 'Description for product 2', 20.00);
INSERT INTO products (name, description, price) VALUES ('Product 3', 'Description for product 3', 30.00);

-- Insert initial carts
INSERT INTO carts (user_id) VALUES (1);
INSERT INTO carts (user_id) VALUES (2);

-- Insert initial cart_products associations
INSERT INTO cart_products (cart_id, product_id) VALUES (1, 1);
INSERT INTO cart_products (cart_id, product_id) VALUES (1, 2);
INSERT INTO cart_products (cart_id, product_id) VALUES (2, 3);
