<template>
  <div class="">
    <v-header title="我的"></v-header>
    <div class="header">
      <div class="header-main">
        <div class="portrait">
          <img :src="filesurl" alt="" />
        </div>
        <h3 v-show="nook">用户名:{{ username }}</h3>
        <h4 v-show="ok"><a @click="gologin">登录</a>/ <router-link to="/register">注册</router-link></h4>
        <h4 @click="edit" v-show="nook">退出账号</h4>
      </div>

      <!-- <p>用户名</p> -->
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import axios from "axios";
import Footer from "@/components/footer/index.vue";
import Header from "@/components/header/index.vue";
import router from "../../router";
export default {
  data() {
    return {
      username: "",
      filesurl: "",
      ok: true,
      nook: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    gologin() {
      router.push("/login");
    },
    goregister() {
      router.push("/register");
    },
    getList() {
      axios.get("/api/lists/user").then((res) => {
        // var a = this.$route.fullPath;
        // var b = a.substring(a.length - 24);
        var b = localStorage.getItem("stardewname");
        console.log(b);
        const userLists = res.data.lists;
        userLists.forEach((item) => {
          item.filesurl = `http://localhost:8888/${item.filesurl}`;
          if (b == item._id) {
            console.log(item.username);
            this.username = item.username;
            this.filesurl = item.filesurl;
            this.ok = false;
            this.nook = true;
          }
        });
      });
    },
    //退出账号
    edit() {
      localStorage.removeItem("stardewname");
      // this.$router.push("/mine");
      this.$router.go(0);
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
* {
  margin: 0;
  padding: 0;
}
.header {
  width: 100%;
  height: 150px;
  background: skyblue;
  box-sizing: border-box;
  padding-top: 10px;
}
.header-main {
  width: 90%;
  height: 100px;
  margin: 16px auto;
  background: burlywood;
}
.header .portrait {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: oldlace;
  margin-left: 10px;
  overflow: hidden;
  float: left;
}
.header .portrait img {
  width: 100%;
  height: 100%;
}
.header-main h4 {
  margin-top: 20px;
  width: 100%;
  background: chartreuse;
}
.header-main h3 {
  /* margin-top: 20px; */
  background: coral;
}
</style>
