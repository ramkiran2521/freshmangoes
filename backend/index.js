const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
const connection = mongoose.connection;

mongoose.connect(uri, {
  useNewUrlParser: true,
});

connection.once("open", () => {
  console.log("connection established");
});

const productsRouter = require("./routes/products");

app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`listening in port ${port}`);
});
