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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
