<template>
  <div class="">
    <h2>列表界面</h2>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-swipe-cell v-for="item in tableData" :key="item._id">
          <ul>
            <li>
              <img :src="item.filesurl" alt="" />
              <p>{{ item.name }}</p>
              <p>{{ item.price }}</p>
              <p>{{ item.other }}</p>
              <p>{{ item.incloude }}</p>
            </li>
          </ul>
          <template #right>
            <van-button square type="danger" @click="deleteRow(item._id)" text="删除" />
          </template>
        </van-swipe-cell>
        <!-- <ul>
          <li v-for="item in tableData" :key="item._id">
            <img :src="item.filesurl" alt="" />
            <p>{{ item.name }}</p>
            <p>{{ item.price }}</p>
            <p>{{ item.other }}</p>
            <p>{{ item.incloude }}</p>
            
          </li>
        </ul> -->
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      //以下为下拉刷新用
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    //获取东西到列表
    getList() {
      axios.get("/api/lists").then((res) => {
        // console.log(res);
        const list = res.data.lists;
        list.forEach((item) => {
          item.filesurl = `http://localhost:8888/${item.filesurl}`;
          // console.log(item.filesurl)
        });
        // console.log(this.tableData,this.imgurl,this.username)
        // console.log(list[0].username, list[0].password, list[0].filesurl);
        this.tableData = list;
      });
    },
    //删除
    deleteRow(id, index) {
      this.tableData.splice(index, 1);
      alert(id);
      axios
        .delete("/api/delist", {
          params: {
            id,
          },
        })
        .then((res) => {
          console.log(res);
        });
    },
    //以下为下拉刷新
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        if (this.list.length >= 40) {
          this.finished = true;
        }
        this.loading = false;
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
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
ul {
  width: 100%;
  background: skyblue;
}
ul li {
  position: relative;
  margin-bottom: 5px;
  width: 100%;
  background: oldlace;
  display: flex;
  justify-content: space-around;
}
ul li img {
  width: 50px;
  height: 50px;
}
/*ul li p:nth-of-type(1) {
  /margin-left: 50px; 
} */
ul li p {
  line-height: 100%;
  float: left;
  width: 20%;
  text-align: center;
  /* background: skyblue; */
}
</style>
