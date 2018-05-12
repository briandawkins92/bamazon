/* BEGIN JAVASCRIPT */
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});
var inquirer = require('inquirer');

function checkInventory() {
    inquirer.prompt([
        {
            type: "list",
            name: "managerOptions",
            message: "What would you like to do: ",
            choices: ['View Products For Sale', 'View Low Inventory',
                'Add to Inventory', 'Add New Product']
        }
    ]).then(function (choices) {
        var a = choices.managerOptions;
        var b = "View Products For Sale";
        var c = "View Low Inventory";
        var d = "Add to Inventory";
        var e = "Add New Product";
        if (a === b) {
            connection.query('SELECT * FROM products', function (err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log("Item ID: " + res[i].item_id + " Product name: "
                        + res[i].product_name + " Department Name: " + res[i].department_name
                        + ' Price: $' + res[i].PRICE + " Stock Quantity: " +
                        res[i].stock_quantity);
                }
            })
            connection.end();
        }
        if (a === c) {
            connection.query('SELECT * FROM products', function (err, res) {
                for (var i = 0; i < res.length; i++) {
                    if (res[i].stock_quantity < 5) {
                        console.log("Item ID: " + res[i].item_id + " Product name: "
                            + res[i].product_name + " Department Name: " + res[i].department_name
                            + ' Price: $' + res[i].PRICE + " Stock Quantity: " +
                            res[i].stock_quantity);
                    }
                }
            })
            connection.end();
        }
        if (a === d) {
            connection.query("SELECT * FROM products", function (err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log("Item ID: " + res[i].item_id + " & Product name: "
                        + res[i].product_name);
                }
                inquirer.prompt([
                    {
                        type: "input",
                        name: "Item_ID",
                        message: "What is the ID of the product you wish to add to?"
                    }, {
                        type: 'input',
                        name: "add_quantity",
                        message: "How much do you want to add?"
                    }
                ]).then(function (product) {
                    var z = product.Item_ID;
                    var x = product.add_quantity;
                    var query = connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: (res[z - 1].stock_quantity + Number(x))
                            }, {
                                item_id: z
                            }
                        ]
                    )
                    console.log(query.sql);
                    connection.end();
                })
            })
        }
    if (a === e) {
        
    }

    })
}

checkInventory();

/* END JAVASCRIPT */