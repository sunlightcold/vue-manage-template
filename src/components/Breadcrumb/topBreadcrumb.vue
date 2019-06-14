<template>
  <!-- 面包屑 -->
  <el-breadcrumb class="app-breadcrumb" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="(item) in levelList" :key="item.path">
      <router-link :to="item.redirect||item.path" class="bread-title">{{item.meta.title}}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
  <!-- 面包屑 End -->
</template>

<script>
export default {
  data() {
    return {
      levelList: null
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      this.levelList = matched
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
}
</script>

<style lang="stylus" scoped>
.app-breadcrumb {
  height 60px
  line-height 60px

  .el-breadcrumb__item:last-child, .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color #fff
  }

  .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
    color #eee
  }

  .el-breadcrumb__inner a:hover {
    color #409eff
  }
}
</style>


