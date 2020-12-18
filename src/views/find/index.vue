<template>
  <div class="find-main">
    <v-header title="发现"></v-header>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../../../public/image/星露谷1.png" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../public/image/星露谷2.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../public/image/沙滩.jpg" alt="" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../public/image/星露谷4.png" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="find-r" @click="gofortune">
      <h2>今日运势</h2>
    </div>
    <div class="find-r" @click="gonews">
      <h2>
        酒馆
      </h2>
    </div>
    <div class="find-r" @click="gotips">
      <h2>
        离地而居
      </h2>
    </div>
    <div class="find-r" @click="gokitchen">
      <h2>
        酱料女皇
      </h2>
    </div>
    <div class="find-r" @click="goweather">
      <h2>
        天气预告
      </h2>
    </div>
    <div class="find-f"></div>
    <!-- <router-view></router-view> -->
    <v-footer></v-footer>
  </div>
</template>

<script>
import Footer from "@/components/footer/index.vue";
import Header from "@/components/header/index.vue";
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    gofortune() {
      this.$router.push("fortune");
    },
    gotips() {
      this.$router.push("tips");
    },
    gokitchen() {
      this.$router.push("kitchen");
    },
    goweather() {
      this.$router.push("weather");
    },
    gonews() {
      this.$router.push("pub");
    },
  },
  created() {},
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
.find-main {
  position: absolute;
  width: 100%;
  /* height: 100%; */
  z-index: -1;
  background: #21643e;
}
img {
  width: 375px;
  height: 200px;
}
.find-r {
  width: 100%;
  height: 100px;
  background: skyblue;
  margin-bottom: 5px;
}
.find-f {
  height: 50px;
  width: 100%;
}
</style>
