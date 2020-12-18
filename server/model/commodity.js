//添加物品的
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/xinglugu", { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

const userSchema = new Schema({
  value: String,
  name: String,
  price: String,
  other: String,
  incloude: String,
  filesname: String,
  filesurl: String,
});

const Commodity = mongoose.model("Commodity", userSchema);
module.exports = Commodity;
