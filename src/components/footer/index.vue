<template>
  <ul>
    <router-link to="./movie" tag="li">
      <van-icon name="wap-home-o" size="22" />
      <p>首页</p>
    </router-link>
    <router-link to="./find" tag="li">
      <van-icon name="search" size="22" />
      <p>发现</p>
    </router-link>
    <router-link to="./movielist" tag="li">
      <van-icon name="orders-o" size="22" />
      <p>商店</p>
    </router-link>
    <router-link to="./mine" tag="li">
      <van-icon name="manager-o" size="22" />
      <p>我的</p>
    </router-link>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
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
ul {
  box-sizing: border-box;
  padding-top: 2px;
  width: 100%;
  height: 50px;
  background: #333;
  display: flex;
  justify-content: space-around;
  position: fixed;
  /* position: relative; */
  left: 0;
  bottom: 0;
  border-top: 1px solid rgb(124, 124, 124);
}
li {
  list-style: none;
  float: left;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
}
li p {
  width: 100%;
  font-size: 14px;
  text-align: center;
  color: aliceblue;
}
.active {
  color: rgb(247, 245, 245);
}
</style>
