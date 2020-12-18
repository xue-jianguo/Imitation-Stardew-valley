<template>
  <div class="login-main">
    <div class="login">
      <h2>登录界面</h2>
      <van-form @submit="onSubmit">
        <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
      <p id="pd">没有账号?点击 <a @click="goregister">注册</a></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import router from "../../router";
export default {
  data() {
    return {
      username: "",
      password: "",
      tableData: [],
      id: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    goregister() {
      this.$router.push("register");
    },
    // onSubmit(values) {
    //   console.log("submit", values);
    // },
    onSubmit() {
      console.log(this.username);
      console.log(this.password);
      let falg = 0;
      axios.get("/api/lists/user").then((res) => {
        // console.log(res);
        const userLists = res.data.lists;
        userLists.forEach((item) => {
          if (this.username == item.username) {
            if (this.password == item.password) {
              this.id = item._id;
              falg = 1;
            }
          }
        });
        if (falg) {
          alert("登陆成功");
          localStorage.setItem("stardewname", this.id);
          this.$router.push(`/mine? ${this.id}`);
          // `/mine? ${item._id}`
        } else {
          alert("用户名或密码错误，请重新输入");
        }
      });
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
  components: {},
};
</script>

<style scoped>
.login-main {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background: skyblue;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.login-main .login {
  width: 340px;
  height: 400px;

  background: oldlace;
}
.login-main .login h2 {
  margin-bottom: 50px;
  text-align: center;
}
#pd {
  margin-left: 15px;
}
</style>
