-- src/main/resources/data.sql

-- Insert initial users
INSERT INTO users (username, password) VALUES ('user1', '$2a$10$u1/QRm1USc5t6o/U6or3OeLk6X1G1kEq9I3K3Vz3zJZ9QvTnPt.Ky'); -- password: password1
INSERT INTO users (username, password) VALUES ('user2', '$2a$10$VzZzVc6boerE/ToV1c5qEeyu3E5vcn4v1r3Vv1U5EZ9Vn3nV5K6F2'); -- password: password2

-- Insert initial products
INSERT INTO products (name, rating, category, description, price, imageURL) VALUES
('Wireless Earbuds', 4.5, 'Electronics', 'High-quality wireless earbuds with noise cancellation.', 99.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Smartphone', 4.8, 'Electronics', 'Latest model smartphone with advanced features and high-resolution camera.', 699.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Laptop', 4.6, 'Electronics', 'Lightweight laptop with powerful performance and long battery life.', 999.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Bluetooth Speaker', 4.4, 'Electronics', 'Portable Bluetooth speaker with excellent sound quality.', 49.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Smartwatch', 4.3, 'Wearables', 'Stylish smartwatch with fitness tracking and notification alerts.', 199.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Fitness Tracker', 4.2, 'Wearables', 'Compact fitness tracker with heart rate monitor and sleep tracking.', 79.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Digital Camera', 4.7, 'Photography', 'High-resolution digital camera with interchangeable lenses.', 499.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Gaming Console', 4.9, 'Gaming', 'Next-gen gaming console with immersive graphics and gameplay.', 399.99, 'https://images-cdn.ubuy.co.in/63535309782ae9465a6ff864-sony-playstation-4-pro-1tb-console.jpg'),
('4K TV', 4.5, 'Electronics', 'Large 4K TV with HDR support and smart features.', 899.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Electric Toothbrush', 4.1, 'Health', 'Rechargeable electric toothbrush with multiple brushing modes.', 49.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Hair Dryer', 4.0, 'Beauty', 'High-performance hair dryer with multiple heat and speed settings.', 29.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Air Fryer', 4.3, 'Kitchen', 'Healthy air fryer for cooking crispy and delicious meals.', 89.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Robot Vacuum', 4.6, 'Home Appliances', 'Smart robot vacuum cleaner with app control and scheduling.', 299.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Coffee Maker', 4.4, 'Kitchen', 'Automatic coffee maker with programmable settings and frother.', 129.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Standing Desk', 4.7, 'Furniture', 'Adjustable standing desk with ergonomic design and motorized height adjustment.', 399.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Office Chair', 4.5, 'Furniture', 'Comfortable office chair with lumbar support and adjustable armrests.', 199.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Yoga Mat', 4.2, 'Fitness', 'Eco-friendly yoga mat with non-slip surface and cushioning.', 29.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Blender', 4.3, 'Kitchen', 'High-speed blender for smoothies and soups with multiple settings.', 69.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Electric Kettle', 4.4, 'Kitchen', 'Stainless steel electric kettle with fast boiling and auto shut-off.', 39.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Air Purifier', 4.6, 'Home Appliances', 'HEPA air purifier with real-time air quality monitoring.', 149.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Water Bottle', 4.5, 'Fitness', 'Insulated stainless steel water bottle with leak-proof lid.', 24.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Wireless Mouse', 4.2, 'Electronics', 'Ergonomic wireless mouse with programmable buttons.', 29.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Keyboard', 4.3, 'Electronics', 'Mechanical keyboard with customizable RGB lighting.', 89.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Electric Scooter', 4.8, 'Transportation', 'Foldable electric scooter with long-range battery and high speed.', 499.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Smart Thermostat', 4.7, 'Home Appliances', 'Energy-saving smart thermostat with remote control via app.', 179.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Indoor Plant', 4.5, 'Home Decor', 'Low-maintenance indoor plant that improves air quality.', 19.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Wall Art', 4.6, 'Home Decor', 'Beautiful wall art print to enhance your living space.', 39.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Sofa', 4.4, 'Furniture', 'Comfortable and stylish sofa with durable upholstery.', 599.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Cookware Set', 4.3, 'Kitchen', 'Non-stick cookware set with multiple pots and pans.', 99.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Electric Grill', 4.2, 'Kitchen', 'Compact electric grill for indoor and outdoor cooking.', 49.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Running Shoes', 4.5, 'Footwear', 'Lightweight and comfortable running shoes with good arch support.', 69.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Backpack', 4.4, 'Accessories', 'Durable backpack with multiple compartments and padded straps.', 49.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Electric Shaver', 4.3, 'Personal Care', 'Rechargeable electric shaver with precision blades and trimmer.', 59.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Vacuum Cleaner', 4.6, 'Home Appliances', 'Powerful vacuum cleaner with multiple attachments for deep cleaning.', 199.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Smart Light Bulb', 4.5, 'Electronics', 'Color-changing smart light bulb with app and voice control.', 19.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Camping Tent', 4.7, 'Outdoors', 'Waterproof camping tent with easy setup and spacious interior.', 129.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Sleeping Bag', 4.5, 'Outdoors', 'Warm and comfortable sleeping bag for all-season camping.', 59.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Electric Blanket', 4.4, 'Home', 'Soft electric blanket with adjustable heat settings.', 39.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Standing Fan', 4.3, 'Home Appliances', 'Quiet standing fan with adjustable height and oscillation.', 59.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Portable Charger', 4.6, 'Electronics', 'High-capacity portable charger for mobile devices.', 29.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Wireless Charger', 4.4, 'Electronics', 'Fast wireless charger compatible with various smartphones.', 39.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Baby Monitor', 4.5, 'Baby', 'Video baby monitor with night vision and two-way audio.', 79.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Board Game', 4.8, 'Toys & Games', 'Fun and engaging board game for family and friends.', 29.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Toy Robot', 4.7, 'Toys & Games', 'Interactive toy robot with educational features and games.', 49.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Action Camera', 4.6, 'Photography', 'Compact action camera with 4K video recording and waterproof case.', 99.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Electric Guitar', 4.4, 'Music', 'Electric guitar with amplifier and accessories.', 199.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Synthesizer', 4.5, 'Music', 'Versatile synthesizer with various sound effects and presets.', 299.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90'),
('Dumbbell Set', 4.6, 'Fitness', 'Adjustable dumbbell set for strength training and workouts.', 89.99, 'https://cdn.gadgets360.com/content/assets/brands/nvidia.png?downsize=*:90');

-- Insert initial carts
INSERT INTO carts (user_id) VALUES (1);
INSERT INTO carts (user_id) VALUES (2);

-- Insert initial cart_products associations
INSERT INTO cart_products (cart_id, product_id) VALUES (1, 1);
INSERT INTO cart_products (cart_id, product_id) VALUES (1, 2);
INSERT INTO cart_products (cart_id, product_id) VALUES (2, 3);
