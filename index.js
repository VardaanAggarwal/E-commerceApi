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


