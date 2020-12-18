<template>
  <div id="header">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "首页",
    },
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
#header {
  width: 100%;
  height: 50px;
  color: #fff;
  background: #333;
  position: fixed;
  border-bottom: 1px solid #3d3d3d;
  position: relative;
}
#header h2 {
  font-size: 20px;
  text-align: center;
  line-height: 50px;
  font-weight: normal;
}
</style>
