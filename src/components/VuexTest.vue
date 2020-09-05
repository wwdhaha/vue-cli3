<template>
  <div>
    <div>Vuex测试</div>
    <div>{{ count }}</div>
    <el-button type="primary" @click="countAdd">countAdd</el-button>
    <el-button type="primary" @click="countReduce">countReduce</el-button>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "VuexTest",
  data() {
    return {};
  },
  computed: {
    ...mapState({ count: "count" })
  },
  mounted() {},
  methods: {
    // ...mapMutations({ countAdd: "countAdd", countReduce: "countReduce" })
    ...mapMutations(["countAdd", "countReduce"])
  }
};
</script>
