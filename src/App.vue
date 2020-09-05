<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  mounted() {
    // 设置title
    // this.setTitle();
    // 设置rem
    this.setPageRem();
    window.addEventListener("resize", this.setREM);
  },
  methods: {
    methods: {
      // 按照分辨率设置rem的size
      setPageRem() {
        const initRem = 100;
        const initScreenWidth = 1920;
        const screenWidth = window.screen.width; // document.body.clientWidth
        const currRem = (initRem / initScreenWidth) * screenWidth;
        document.body.parentElement.style.fontSize = currRem + "px";
      }
      // 设置主页面浏览器页头标题
      // setTitle() {
      //   document.title = "heiheihei";
      // }
    }
  }
};
</script>
<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #2d2d2d;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: skyblue;
  font-size: 14px;
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}
</style>
