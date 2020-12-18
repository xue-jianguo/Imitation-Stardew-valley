<template>
  <div>
    <van-tabs v-model="activeName">
      <!-- 添加用户 -->
      <van-tab title="用户添加" name="a" to="/rigset">
        <van-uploader :after-read="afterRead" v-model="filelist" :max-count="1" />

        <van-form @submit="onSubmit">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value" :options="option" />
          </van-dropdown-menu>
          <van-field v-model="name" label="名称" placeholder="名称" />
          <van-field v-model="price" label="价格" placeholder="价格" />
          <van-field v-model="other" label="详情" placeholder="详情" />

          <van-field v-model="incloude" label="其他" placeholder="其他" />

          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
              注册
            </van-button>
          </div>
        </van-form>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      value: "",
      name: "",
      price: "",
      other: "",
      incloude: "",
      imgurl: "",

      //选择内容tab栏
      activeName: "a",
      //登录，内容二
      filelist: [],
      //图片上传
      tableData: [],
      //以下为下拉框

      option: [
        { text: "农产品", value: 0 },
        { text: "工具", value: 1 },
        { text: "鱼", value: 2 },
        { text: "食物", value: 3 },
        { text: "武器", value: 4 },
        { text: "家具", value: 5 },
      ],
    };
  },
  created() {},
  methods: {
    //跳转
    goLongin() {},

    //添加
    onSubmit() {
      const imginfo = this.filelist[0].file;
      const formdata = new FormData();
      alert(this.value);
      formdata.append("value", this.value);
      formdata.append("name", this.name);
      formdata.append("price", this.price);
      formdata.append("other", this.other);
      formdata.append("incloude", this.incloude);
      formdata.append("avatar", imginfo);
      axios.post("/api/upload", formdata).then((res) => {
        console.log(res), alert("注册成功");
      });
    },

    //上传图片
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      console.log(file.file.name);
    },
  },
};
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
