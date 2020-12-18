<template>
  <div class="login-main">
    <div class="login">
      <h2>注册界面</h2>
      <van-form @submit="onSubmit">
        <div class="portrait">
          <van-uploader :after-read="afterRead" v-model="filelist" :max-count="1" />
        </div>
        <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" :rules="[{ required: true, message: '请填写密码' }]" />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            点击注册
          </van-button>
        </div>
      </van-form>
      <p id="pd">已有账号?点击 <router-link to="/login">登录</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import router from "../../router";
export default {
  data() {
    return {
      b: 2,
      username: "",
      password: "",
      filelist: [],
      //图片上传
      tableData: [],
      //存用户数据
      userlist: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    //上传信息
    onSubmit() {
      const imginfo = this.filelist[0].file;
      const formdata = new FormData();
      let falg = 0;

      //取出
      /* axios
        .post("/api/lists/user", {
          params: {
            username: this.username,
          },
        })
        .then((res) => {
          console.log(res);
        }); */
      axios.get("/api/lists/user").then((res) => {
        const userLists = res.data.lists;
        userLists.forEach((item) => {
          if (this.username == item.username) {
            falg = 1;
          }
        });
        if (falg) {
          alert("用户名已存在");
        } else {
          formdata.append("username", this.username);
          formdata.append("password", this.password);
          formdata.append("avatar", imginfo);

          axios.post("/api/upload/user", formdata).then((res) => {
            console.log(res);
            alert("注册成功");
            this.$router.push("/login");
          });
          console.log(11111);
        }
      });
      /* axios.get("/api/lists/user").then((res) => {
        // console.log(res);
        const list = res.data.lists;
        this.tableData = list;
        console.log(this.tableData);
        console.log(this.tableData.length);
        // var a = this.tableData.length;

        for (let i in this.tableData) {
          console.log(this.username);
          console.log(this.tableData[i].username);
          if (this.username != this.tableData[i].username) {
            this.b = 1;
          } else if (this.username == this.tableData[i].username) {
            this.b = 2;
          }
        }
        console.log(this.b);
        if (this.b == 1) {
          formdata.append("username", this.username);
          formdata.append("password", this.password);
          formdata.append("avatar", imginfo);

          // axios.post("/api/upload/user", formdata).then((res) => {
          //   console.log(res), alert("注册成功");
          // });
          alert("注册成功");
        } else if (this.b == 2) {
          alert("用户名已存在");
        }
      }); */
    },

    //上传图片
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      console.log(file.file.name);
    },
  },
  created() {
    // this.getList();
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
  margin-bottom: 10px;
  text-align: center;
}
#pd {
  margin-left: 15px;
}
.portrait {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgb(182, 244, 248);
  margin-left: 130px;
  overflow: hidden;
  margin-bottom: 5px;
}
uploader-size {
  width: 20px;
}
</style>
