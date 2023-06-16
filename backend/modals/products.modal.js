const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productsSchema = new Schema(
  {
    imageurl: { type: String, required: true },
    productname: { type: String, required: true },
    originalprice: { type: Number, required: true },
    offerprice: { type: Number, required: true },
    isavailable: { type: Boolean, required: true },
    weeklyDeal: { type: Boolean, required: true },
    // maxquantity: { type: Number },
    // otherimages: { type: Array },
    // productinfo: { type: String },
  },
  { timestamps: true }
);

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;
