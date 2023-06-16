const router = require("express").Router();
const Products = require("../modals/products.modal");

router.route("/").get((req, res) => {
  Products.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/addProducts").post((req, res) => {
  const imageurl = req.body.imageurl;
  const productname = req.body.productname;
  const originalprice = req.body.originalprice;
  const offerprice = req.body.offerprice;
  const isavailable = req.body.isavailable;
  const weeklyDeal = req.body.weeklyDeal;

  const newProduct = new Products({
    imageurl,
    productname,
    originalprice,
    offerprice,
    isavailable,
    weeklyDeal,
  });

  newProduct
    .save()
    .then(() => res.json("Product added"))
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
