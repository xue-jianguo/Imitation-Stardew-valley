const express = require("express");
const app = new express();
const Commodity = require("./model/commodity");
const User = require("./model/user");
const Cart = require("./model/cart");
const mongoose = require("mongoose");
var multer = require("multer");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.set("useFindAndModify", false);

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + file.originalname);
  },
});

app.use("/uploads", express.static("uploads"));

var upload = multer({ storage: storage });
//---------------------------------------------------后台管理操作-----------------------------------
//添加物品
app.post("/upload", upload.single("avatar"), function(req, res, next) {
  mongoose.connect("mongodb://localhost:27017/xinglugu").then((mon) => {
    const commodity = new Commodity({
      value: req.body.value,
      name: req.body.name,
      price: req.body.price,
      other: req.body.other,
      incloude: req.body.incloude,
      filesurl: req.file.path,
      filesname: req.file.originalname,
    });
    commodity.save().then((result) => {
      res.json({
        code: 20000,
        msg: "添加成功",
      });
    });
  });
});
//获取列表
app.get("/lists", async (req, res) => {
  const result = await Commodity.find();
  if (result.length > 0) {
    res.json({
      code: 200,
      lists: result,
    });
  } else {
    res.json({
      code: 201,
      msg: "失败",
    });
  }
});
//删除物品
app.delete("/delist", async (req, res) => {
  console.log(req.url);
  const id = req.url.substr(11);
  // const id = req.body.id;
  console.log(id);
  const arr = await Commodity.findByIdAndDelete(id);
  res.json({
    code: 200,
    msg: "删除成功",
  });
});
//---------------------------------------------------后台管理操作-----------------------------------

//---------------------------------------------------用户账号操作-----------------------------------
//添加用户
app.post("/upload/user", upload.single("avatar"), function(req, res, next) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    filesurl: req.file.path,
    filesname: req.file.originalname,
  });
  user.save().then((result) => {
    res.json({
      code: 20000,
      msg: "添加成功",
    });
  });
});
//1.获取到数据库的用户 2.存入到cookie 3.遍历对比 4.无冲突可注册
/* app.post("/lists/user", async (req, res, next) => {
  const username = req.body.params.username;
  const result = await User.find({ username: username });
  console.log("----------------" + result);
}); */
app.get("/lists/user", async (req, res) => {
  const result = await User.find();
  res.json({
    code: 200,
    lists: result,
  });
  /* if (result.length > 0) {
    res.json({
      code: 200,
      lists: result,
    });
  } else {
    res.json({
      code: 201,
      msg: "失败",
    });
  } */
});
//---------------------------------------------------用户账号操作-----------------------------------
//---------------------------------------------------商店操作-----------------------------------
//从数据库取出数据添加到商品展示列表
app.get("/lists/shop", async (req, res) => {
  const result = await Commodity.find();
  if (result.length > 0) {
    res.json({
      code: 200,
      lists: result,
    });
  } else {
    res.json({
      code: 201,
      msg: "失败",
    });
  }
});
// app.get("/lists/shop/details", async (req, res) => {
//   console.log(req.url);
//   const id = req.url.substr(31);

// });
//---------------------------------------------------商店操作-----------------------------------
//---------------------------------------------------购物车操作-----------------------------------
//添加物品到购物车
app.post("/addcart", upload.single("avatar"), function(req, res, next) {
  const cart = new Cart({
    value: req.body.value,
    name: req.body.name,
    price: req.body.price,
    other: req.body.other,
    incloude: req.body.incloude,
    filesurl: req.body.filesurl,
  });
  cart.save().then((result) => {
    res.json({
      code: 20000,
      msg: "添加成功",
    });
  });
});
//从数据库取出数据添加到购物车展示列表
app.get("/lists/cart", async (req, res) => {
  const result = await Cart.find();
  if (result.length > 0) {
    res.json({
      code: 200,
      lists: result,
    });
  } else {
    res.json({
      code: 201,
      msg: "失败",
    });
  }
});
//购物车删除数据
app.delete("/deletecart", async (req, res) => {
  // console.log(req.url);
  // const id = req.url.substr(11);
  const a = req.url;
  var b = a.substring(a.length - 24);
  const id = b;
  // console.log(id);
  const arr = await Cart.findByIdAndDelete(id);
  res.json({
    code: 200,
    msg: "删除成功",
  });
});
//购物车去重
app.post("/lists/carts", async (req, res, next) => {
  req.body.params;
  // console.log(req.body.params.value);
  await Cart.findByIdAndUpdate(req.body.params.id, {
    value: req.body.params.value,
  });
});

//---------------------------------------------------购物车操作-----------------------------------
app.listen(8888, "127.0.0.1");
