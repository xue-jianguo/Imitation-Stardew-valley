<template>
  <div id="app">
    <v-header title="商店"></v-header>
    <div class="shop-h">
      <img src="../../../public/image/种子店1.png" alt="" />
    </div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :show-indicators="false">
      <van-swipe-item>
        <img src="../../../public/image/皮埃尔.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../public/image/婚礼.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../public/image/夜市.png" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- //列表页 -->
    <van-tree-select height="110vw" :items="items" :main-active-index.sync="active" @click-nav="onNavClick">
      <template #content>
        <ul class="right-content">
          <!-- <li v-for="(count, index) in 10" :key="index" @click="onItemClick(index)">
          {{ count }}
        </li> -->
          <div v-if="active === 0">
            <li v-for="(item, index) in crops" :key="index" @click="onItemClick(index, item)">
              <img :src="item.filesurl" alt="" />
              <p>{{ item.name }}</p>
            </li>
          </div>
          <div v-if="active === 1">
            <li v-for="(item, index) in tool" :key="index" @click="onItemClick(index, item)">
              <p>{{ item.name }}</p>
            </li>
          </div>
          <div v-if="active === 2">
            <li v-for="(item, index) in fish" :key="index" @click="onItemClick(index, item)">
              <p>{{ item.name }}</p>
            </li>
          </div>
          <div v-if="active === 3">
            <li v-for="(item, index) in food" :key="index" @click="onItemClick(index, item)">
              <p>{{ item.name }}</p>
            </li>
          </div>
          <div v-if="active === 4">
            <li v-for="(item, index) in arms" :key="index" @click="onItemClick(index, item)">
              <p>{{ item.name }}</p>
            </li>
          </div>
          <div v-if="active === 5">
            <li v-for="(item, index) in furniture" :key="index" @click="onItemClick(index, item)">
              <p>{{ item.name }}</p>
            </li>
          </div>
        </ul>
      </template>
    </van-tree-select>

    <v-footer></v-footer>
  </div>
</template>

<script>
import Footer from "@/components/footer/index.vue";
import Header from "@/components/header/index.vue";
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      active: 0,
      items: [{ text: "农作物" }, { text: "工具" }, { text: "鱼" }, { text: "食物" }, { text: "武器" }, { text: "家具" }],
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
    onNavClick(index) {
      alert(index + 1);
    },
    onItemClick(index, item) {
      alert(item.name);
    },
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
  components: {
    "v-footer": Footer,
    "v-header": Header,
  },
};
</script>

<style scoped>
#app {
  position: absolute;
  width: 100%;
  /* height: 100%; */
  z-index: -1;
  background: #21643e;
}
/* 头部大图 */
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
/* 轮播图 */
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
/* 右侧列表栏背景 */
.van-tree-select__content {
  box-sizing: border-box;
  padding: 24px 6px 10px 6px;
  background-image: url(../../../public/image/篮子2.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
