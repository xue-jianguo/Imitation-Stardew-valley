var models = require("./model/user");

var express = require("express");
//用路由中间件
var router = express.Router();

router.get("/lists", (req, res) => {
  models.list.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
      console.log(data);
    }
  });
});

module.exports = router;
