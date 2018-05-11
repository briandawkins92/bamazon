CREATE DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT NULL,
product_name VARCHAR(50) NULL,
department_name VARCHAR(50) NULL,
price INT NULL,
stock_quantity INT NULL
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "Bananas", "Produce", 1, 10), (2, "Toothpaste", "Products",  4, 20), (3, "Water Bottle", "Drinks", 1, 100), (4, "Suitcase", "Luxury Items", 100, 15), (5, "Pencil", "School Supplies", 2, 2000), (6, "Computer", 
"Electronics", 800, 12), (7, "Medicine", "Pharmacy", 500, 2), (8, "Underwear", "Clothing", 5, 500), 
(9, "Calculator", "Electronics", 3, 33), (10, "Mirror", "Home Goods", 45, 60);