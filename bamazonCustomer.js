/* BEGIN JAVASCRIPT*/

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});
var inquirer = require("Inquirer");

function checkStock() {
    console.log("Greetings! This is what we have in stock");
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("Item ID: " + res[i].item_id + " & Product name: "
             + res[i].product_name);
            }
        inquirer.prompt([
            {
                type: "input",
                name: "Item_ID",
                message: "What is the ID of the product you wish to buy?"
            }, {
                type: "input",
                name: "want_quantity",
                message: "How much do you wish to buy?"
            }
        ]).then(function (product) {
            var x = product.Item_ID;
            var y = product.want_quantity;
            if (y > res[x - 1].stock_quantity) {
                console.log("Insufficient Quantity!");
                connection.end();
            } else {
                console.log("Your order is fulfilled! Your total is $"
                    + (y * res[x - 1].PRICE));
                    var query = connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: (res[x-1].stock_quantity - y)
                            },
                            {
                                item_id: x
                            }
                        ]
                    )
                    console.log(query.sql);
                    connection.end();
                };
            })

    })
}


checkStock();

/* END JAVASCRIPT*/

