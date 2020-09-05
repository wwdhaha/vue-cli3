<template>
  <div class="main_Main">
    <!-- 头部导航 -->
    <Header />

    <!-- 系统主页 不可与子系统同时存在-->

    <!-- 子系统 -->
    <div class="sys_cont">
      <!-- 菜单导航 -->
      <div class="left_cont">
        <NavPublic />
      </div>
      <!-- content -->
      <div class="right_cont">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "./../header/Header";
import NavPublic from "./../NavPublic";
export default {
  name: "Main",
  props: {},
  components: {
    Header,
    NavPublic
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.main_Main {
  height: 100%;
  overflow: hidden;
  .sys_cont {
    height: calc(100% - 80px);
    position: relative;
    .left_cont {
      position: absolute;
      height: 100%;
      width: 200px;
      left: 0;
      top: 0;
    }
    .right_cont {
      position: absolute;
      height: 100%;
      width: calc(100% - 200px);
      left: 200px;
      top: 0;
    }
  }
}
</style>
