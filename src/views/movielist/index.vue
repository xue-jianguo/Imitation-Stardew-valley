<template>
  <div id="app">
    <v-header title="商店"></v-header>
    <div class="shop-h">
      <img src="../../../public/image/种子店1.png" alt="" />
    </div>
    <van-swipe class="my-swipe" :autoplay="5000" indicator-color="white" :show-indicators="false">
      <van-swipe-item>
        <img src="../../../public/image/标题2.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../public/image/标题3.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../public/image/标题1.png" alt="" />
      </van-swipe-item>
    </van-swipe>
    <van-tree-select height="110vw" :items="items" :main-active-index.sync="active">
      <template #content>
        <div v-if="active === 0">
          <ul v-for="(item, index) in crops" :key="index" @click="onItemClick(index, item)" class="shopList">
            <li>
              <img :src="item.filesurl" alt="" />
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>
        <div v-if="active === 1">
          <ul v-for="(item, index) in tool" :key="index" @click="onItemClick(index, item)" class="shopList">
            <router-link tag="li" to="/details">
              <img :src="item.filesurl" alt="" />
              <p>{{ item.name }}</p>
            </router-link>
          </ul>
        </div>
        <div v-if="active === 2">
          <ul v-for="(item, index) in fish" :key="index" @click="onItemClick(index, item)" class="shopList">
            <li>
              <img :src="item.filesurl" alt="" />
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>
        <div v-if="active === 3">
          <ul v-for="(item, index) in food" :key="index" @click="onItemClick(index, item)" class="shopList">
            <li>
              <img :src="item.filesurl" alt="" />
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>
        <div v-if="active === 4">
          <ul v-for="(item, index) in arms" :key="index" @click="onItemClick(index, item)" class="shopList">
            <li>
              <img :src="item.filesurl" alt="" />
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>
        <div v-if="active === 5">
          <ul v-for="(item, index) in furniture" :key="index" @click="onItemClick(index, item)" class="shopList">
            <li>
              <img :src="item.filesurl" alt="" />
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>
      </template>
    </van-tree-select>
    <div class="shop-l" @click="goshoplist"></div>
    <div class="shop-b"></div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import axios from "axios";
import Footer from "@/components/footer/index.vue";
import Header from "@/components/header/index.vue";
// import router from "../../router";
export default {
  data() {
    return {
      tableData: [],
      active: 0,
      items: [{ text: "农作物" }, { text: "工具" }, { text: "鱼" }, { text: "食物" }, { text: "武器" }, { text: "家具" }],
      //农作物
      crops: [],
      //工具
      tool: [],
      //鱼
      fish: [],
      //食物
      food: [],
      //武器
      arms: [],
      //家具
      furniture: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    // geta() {
    //   axios.get("http://localhost:8080/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg").then((res) => {
    //     console.log(res.data.data);
    //   });
    // },
    getList() {
      axios.get("/api/lists").then((res) => {
        //1.获取到数据
        const list = res.data.lists;
        //2.将所有数据填入到tableData里
        this.tableData = list;
        console.log(this.tableData);
        list.forEach((item) => {
          item.filesurl = `http://localhost:8888/${item.filesurl}`;
          // console.log(item.filesurl)
        });
        // console.log(this.tableData.length);
        //3.在tableData里按照value分类，分别存到对应的数组里
        var a = this.tableData.length;
        // console.log(a);
        for (let i = 0; i < a; i++) {
          if (this.tableData[i].value == 0) {
            // this.tableData[i].push(this.crops);
            this.crops.push(this.tableData[i]);
          } else if (this.tableData[i].value == 1) {
            this.tool.push(this.tableData[i]);
          } else if (this.tableData[i].value == 2) {
            this.fish.push(this.tableData[i]);
          } else if (this.tableData[i].value == 3) {
            this.food.push(this.tableData[i]);
          } else if (this.tableData[i].value == 4) {
            this.arms.push(this.tableData[i]);
          } else if (this.tableData[i].value == 5) {
            this.furniture.push(this.tableData[i]);
          }
        }
        //4.再把各数组里的东西添到对应的侧选择栏
      });
    },
    onItemClick(index, item) {
      alert(item._id);
      this.$router.push(`/details? ${item._id}`);
      // this.$router.push({ path: "/details", query: { id: item._id } });
    },
    goshoplist() {
      this.$router.push("/cartlist");
    },
  },
  created() {
    this.getList();
    // this.geta();
    // this.godetails();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
  components: {
    "v-footer": Footer,
    "v-header": Header,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#app {
  position: absolute;
  width: 100%;
  /* height: 100%; */
  z-index: -1;
  background: #21643e;
}
img {
  width: 100px;
  height: 100px;
}
.shop-h {
  width: 100%;
  height: 145px;
  box-sizing: border-box;
  /* margin-bottom: 4px; */
  background: skyblue;
}
.shop-h img {
  width: 100%;
  height: 145px;
}
.van-sidebar-item--select::before {
  background: rgb(8, 182, 66);
}
.van-tree-select__content {
  box-sizing: border-box;
  padding: 24px 6px 10px 6px;
  /* background: teal; */
  background-image: url(../../../public/image/篮子2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.van-sidebar-item {
  background: yellowgreen;
  height: 50px;
  /* text-align: center; */
  box-sizing: border-box;
  padding-left: 12px;
  line-height: 50px;
}
.van-sidebar-item--select,
.van-sidebar-item--select:active {
  background: #b6dc7e;
}
.van-tree-select__nav {
  background: yellowgreen;
}
.shopList li {
  margin-left: 20px;
  margin-bottom: 10px;
  float: left;
  width: 55px;
  height: 75px;
  text-align: center;
  color: aliceblue;
  /* background: darkkhaki; */
}
.shopList li img {
  width: 50px;
  height: 50px;
}
.shop-b {
  width: 100%;
  height: 45px;
}
.my-swipe .van-swipe-item {
  /* color: #fff; */
  /* font-size: 20px; */
  /* line-height: 50px; */
  /* text-align: center; */

  background-color: #f8f8f8;
}
.my-swipe .van-swipe-item img {
  height: 60px;
  width: 100%;
  line-height: 50px;
}
.van-swipe-item {
  height: 60px;
}
/* //篮子 */
.shop-l {
  width: 70px;
  height: 40px;
  background: rgba(0, 0, 0, 0);
  position: absolute;
  position: fixed;
  left: 10px;
  bottom: 50px;
  background-image: url(../../../public/image/菜篮子.png);
  background-size: 100% 100%;
}
.my-swipe .van-swipe {
  background: #21643e;
}
</style>
