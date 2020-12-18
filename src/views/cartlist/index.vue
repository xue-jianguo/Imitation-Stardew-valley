<template>
  <div class="">
    <h2>购物车列表</h2>
    <ul v-for="(item, index) in tableData" :key="index" class="shopList">
      <li>
        <img :src="item.filesurl" alt="" />
        <p>{{ item.name }}</p>
        <p>{{ item.price }}</p>
        <p>{{ item.incloude }}</p>
        <p>{{ item.value }}</p>
        <input type="button" value="删除" @click="deletecart(item._id, index)" />
      </li>
    </ul>
    <div class="cart-f">
      <p @click="goshop">
        商店
      </p>
      <p @click="gohome">
        主页
      </p>
      <p @click="gotop"></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      imgname: "",
      tableData: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    getList() {
      axios.get("/api/lists/cart").then((res) => {
        //1.获取到数据
        const list = res.data.lists;
        //2.将所有数据填入到tableData里
        this.tableData = list;
        console.log(this.tableData);
        this.imgname = this.tableData[0].filesurl;
      });
    },
    //删除物品
    deletecart(id, index) {
      this.tableData.splice(index, 1);
      axios
        .delete("/api/deletecart", {
          params: {
            id,
          },
        })
        .then((res) => {
          console.log(res);
          alert("删除成功");
        });
    },
    gotop() {},
    goshop() {
      this.$router.push("/movielist");
    },
    gohome() {
      this.$router.push("/movie");
    },
  },
  created() {
    this.getList();
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

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.shopList li {
  width: 100%;
  height: 100px;
  background: skyblue;
}
.shopList li img {
  float: left;
}
/* 底部侧边操作 */
.cart-f {
  position: absolute;
  width: 50px;
  height: 150px;
  background: silver;
  right: 10px;
  bottom: 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
}
.cart-f p {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: skyblue;
}
</style>
