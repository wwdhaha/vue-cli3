<template>
  <div class="main_header">
    <el-button @click="click(0)">系统主页</el-button>
    <el-button @click="click(1)">wwd</el-button>
    <el-button @click="click(2)">zw</el-button>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {},
  components: {},
  data() {
    return {
      routers: ["/main", "/wwd/study", "/zw"]
    };
  },
  mounted() {},
  methods: {
    click(num) {
      this.$router.push({
        path: this.routers[num]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.main_header {
  height: 80px;
}
</style>
