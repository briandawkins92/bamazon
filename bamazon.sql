CREATE DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NULL,
department_name VARCHAR(50) NULL,
price INT NULL,
stock_quantity INT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bananas", "Produce", 1, 10), ("Toothpaste", "Products",  4, 20), ("Water Bottle", "Drinks", 1, 100), ("Suitcase", "Luxury Items", 100, 15), ("Pencil", "School Supplies", 2, 2000), ("Computer", 
"Electronics", 800, 12), ("Medicine", "Pharmacy", 500, 2), ("Underwear", "Clothing", 5, 500), 
("Calculator", "Electronics", 3, 33), ("Mirror", "Home Goods", 45, 60);