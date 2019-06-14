<template>
  <!-- 面包屑 -->
  <!-- <el-breadcrumb class="app-breadcrumb" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="(item) in levelList" :key="item.path">
    </el-breadcrumb-item>
  </el-breadcrumb>-->
  <!-- 面包屑 End -->
  <div class="float-breadcrumb">
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      :closable="tag.name !== '首页'"
      :type="tag.type"
      effect="dark"
      size="small"
      @close="closeTag(tag)"
    >
      <router-link
        :to="tag.redirect||tag.path"
        tag="span"
      >{{tag.name}}</router-link>
    </el-tag>
  </div>
</template>

<script>
import { constants } from 'zlib';
export default {
  data() {
    return {
      tags: [{ name: '首页', type: 'success', path: '/index/home' }]
    }
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      let curRouter = matched.pop()
      if (!this.tags.some(item => {
        return item.name === curRouter.meta.floatTitle
      })) {
        this.tags.push({
          name: curRouter.meta.floatTitle,
          type: 'success',
          path: curRouter.path
        })
      }
      this.tags = this.tags.map(item => {
        item.name === curRouter.meta.floatTitle ? item.type = 'success' : item.type = 'info'
        return item
      })
    },
    closeTag(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
      this.$router.push(this.tags[this.tags.length - 1].path)
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
.float-breadcrumb {
  height 22px
  padding 8px 0
  border-bottom 1px solid #eee
  cursor pointer

  .el-tag {
    margin-right 5px
  }
}
</style>


