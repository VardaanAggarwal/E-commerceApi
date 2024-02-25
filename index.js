const express = require("express");
const prisma = require("./DB/db.config.js");

const PORT = 3000;

const app = express();
app.use(express.json());

app.post("/signup", async (req, res) => {
 // signup logic 
});

app.listen(PORT, () => {
  console.log("server started");
});

app.post("/login", (req, res)=>{
  // write the logic for accepting the username and password and check if the user exists in the database
  //login
}) 

app.get("/products", (req, res) => {
  //write the logic to fetch all the products from the db and list them all 
  // name, price, description
})

app.get("/products/:categoryName", (req, res) => {
  //write the logic to fetch all the products in a particular category mentioned in the path params
  // name, price, description
})

app.get("/product/:productId", (req, res) => {
  // write the logic to fetch the product by it's id
  // fetch name, price, description, quantity, categories
})

app.post("/cart/:productId", (req, res) => {
  // write the logic to add the product to the user's cart (fecth the user's detail through authentication)
})

app.post("/order/:productId", (req, res) => {
  // write the logic for purchasing a product and create a order for the user with the product id
  // set the status by default to false
  // handle the race condition where 2 users might try to buy and place order for the same product
  // which will result in concurrency issues
  // reduce the quantity of the product by the amount of the product user bought
  // check before placing order if the product quantity is here or not to place the order
})


