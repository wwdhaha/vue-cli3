<template>
  <div class="main_login">
    <el-button @click="click">登陆</el-button>
  </div>
</template>
<script>
export default {
  name: "Login",
  props: {},
  components: {},
  mounted() {},
  methods: {
    click() {
      this.$router.push({
        path: "/main"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.main_login {
}
</style>
