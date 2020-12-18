<template>
  <div>
    <v-header title="主页"></v-header>
    <!-- 添加用户 -->

    <div class="index-main">
      <div class="index-a" @click="goshop"></div>
      <div class="index-b">
        <van-cell is-link @click="taskbar" id="tan1"></van-cell>
        <van-popup v-model="show" closeable close-icon-position="top-right" id="tan11"> </van-popup>
      </div>
      <div class="index-c" @click="gonews"></div>
      <div class="index-d" @click="goother"></div>
      <div class="index-e" @click="goday"></div>
    </div>

    <v-footer></v-footer>
  </div>
</template>

<script>
// import axios from "axios";
import Footer from "@/components/footer/index.vue";
import Header from "@/components/header/index.vue";
export default {
  data() {
    return {
      show: false,
    };
  },
  computed: {},
  watch: {},
  methods: {
    //上传文件包括图片
    goshop() {
      this.$router.push("/movielist");
    },
    gonews() {},
    goother() {
      this.$router.push("/find");
    },
    goday() {},
    //弹出层
    taskbar() {
      this.show = true;
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
.index-main {
  width: 375px;
  height: 600px;
  position: absolute;
  background-image: url(../../../public/image/鹈鹕镇.png);
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -99;
}
.index-a {
  position: absolute;
  right: 0;
  top: 36px;
  width: 160px;
  height: 194px;
  background: rgb(228, 235, 135, 0);
}
.index-b {
  position: absolute;
  left: 43px;
  top: 200px;
  width: 50px;
  height: 80px;
  background: rgb(235, 135, 213, 0);
}
.index-c {
  position: absolute;
  right: 0;
  top: 350px;
  width: 150px;
  height: 170px;
  background: rgb(214, 123, 39, 0);
}
.index-d {
  position: absolute;
  left: 5px;
  top: 510px;
  width: 80px;
  height: 70px;
  background: rgba(115, 39, 214, 0);
}
.index-e {
  position: absolute;
  left: 120px;
  top: 80px;
  width: 80px;
  height: 140px;
  background: rgb(103, 230, 170);
}
/* //弹出层 */
.van-icon-arrow::before {
  display: none;
}
.van-cell {
  width: 50px;
  height: 80px;
  background-color: rgba(0, 0, 0, 0);
}
/* 弹出框 */
.van-popup {
  width: 336px;
  height: 196px;
  max-height: none;
  position: relative;
  background-image: url(../../../public/image/公告栏.png);
  background-size: 100% 100%;
  background-color: rgba(0, 0, 0, 0);
  z-index: 9;
}
.van-popup--center {
  position: absolute;
  top: 50%;
  left: 290%;
}
/* //猫的daxiao */
</style>
