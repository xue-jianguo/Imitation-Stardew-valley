//注册用户的
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/xinglugu", { useNewUrlParser: true, useUnifiedTopology: true });

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  filesname: String,
  filesurl: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
