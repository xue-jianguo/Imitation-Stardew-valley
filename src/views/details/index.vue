<template>
  <div class="">
    <h2>详情界面</h2>
    <ul v-for="(item, index) in shopdetails" :key="index" class="shopList">
      <img :src="item.filesurl" alt="" />

      <p>名称：{{ item.name }}</p>

      <p>价格：{{ item.price }}</p>

      <p>详情：{{ item.incloude }}</p>

      <p>其他信息：{{ item.other }}</p>
    </ul>
    <!-- //添加 -->
    <van-stepper v-model="value" theme="round" button-size="22" disable-input />
    <!-- 底部栏 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="gocustomer" />
      <van-goods-action-icon icon="shop-o" text="店铺" @click="goshop" />
      <van-goods-action-button type="warning" text="加入购物车" @click="addcart" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      //value添加数量的值
      value: "",
      tableData: [],
      shopdetails: [],
      c: 0,
      id: "",
      // cartlist: [],
    };
  },
  computed: {},
  watch: {
    // $route: "geturl",
  },
  methods: {
    getList() {
      //详情页调用的接口和管理物品界面调用的接口一样是因为都是从全部商品列表获取的数据，在根据id查找，比如
      //打印this.tableData会得到后台所有数据
      axios.get("/api/lists").then((res) => {
        //1.获取到地址栏
        var a = this.$route.fullPath;
        //2.截取最后24位
        var b = a.substring(a.length - 24);
        //1.获取到数据
        const list = res.data.lists;
        //2.将所有数据填入到tableData里
        this.tableData = list;
        // console.log(this.tableData);
        list.forEach((item) => {
          item.filesurl = `http://localhost:8888/${item.filesurl}`;
          // console.log(item.filesurl)
        });
        // console.log(this.tableData.length);
        //3.在tableData里按照id分类，分别存到对应的数组里
        var c = this.tableData.length;
        // console.log(a);
        console.log(b);
        for (let i = 0; i < c; i++) {
          // console.log(this.tableData[i].id);
          if (this.tableData[i]._id == b) {
            this.shopdetails.push(this.tableData[i]);
            console.log(this.shopdetails);
          }
        }
      });
      // 获取购物篮;
      // axios.get("/api/lists/cart").then((res) => {
      //   // console.log("购物篮", res.data.lists);
      //   const cartList = res.data.lists;
      //   this.cartlist = cartList;
      //   console.log(this.cartlist);
      // });
    },
    // test() {
    //   console.log(this.$route.fullPath);
    //   var a = this.$route.fullPath;
    //   console.log(a.substring(a.length - 24));
    // },
    //底部购买栏

    //跳转到客服界面---未做
    onClickIcon() {
      // Toast("点击图标");
    },
    //跳转到购物车界面
    gocustomer() {
      this.$router.push("/cartlist");
    },
    goshop() {
      this.$router.push("/movielist");
    },
    //添加购物车
    addcart() {
      // alert(this.value);
      alert(this.shopdetails[0].filesurl);
      const formdata = new FormData();
      let falg = 0;
      //调用接口
      axios.get("/api/lists/cart").then((res) => {
        const cartList = res.data.lists;
        // console.log(cartList);
        cartList.forEach((item) => {
          if (this.shopdetails[0].name == item.name) {
            falg = 1;
            this.c = item.value;
            this.id = item._id;
          }
        });
        if (falg) {
          console.log("已存在");
          // console.log(this.value);
          this.c = parseInt(this.c) + parseInt(this.value);
          // console.log(this.id);
          axios.post("/api/lists/carts", {
            params: {
              value: this.c,
              id: this.id,
            },
          });
          this.$router.push("/cartlist");
        } else {
          formdata.append("value", this.value);
          formdata.append("name", this.shopdetails[0].name);
          formdata.append("price", this.shopdetails[0].price);
          formdata.append("other", this.shopdetails[0].other);
          formdata.append("incloude", this.shopdetails[0].incloude);
          formdata.append("filesurl", this.shopdetails[0].filesurl);
          axios.post("/api/addcart", formdata).then((res) => {
            console.log(res), alert("添加购物车成功");
          });
        }
      });
    },
    //1
  },
  created() {
    this.getList();
    // this.test();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {},
};
</script>

<style scoped></style>
