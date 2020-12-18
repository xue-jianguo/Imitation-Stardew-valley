//添加物品的
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/xinglugu", { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  value: String,
  name: String,
  price: String,
  other: String,
  incloude: String,
  filesurl: String,
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
