<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="24">
          <el-col
            :span="10"
            :class="isCollapse ? 'system-title-collapsed' : 'system-title-collapse'"
          >{{ isCollapse ? '' : systemTitle }}</el-col>
          <el-col :span="10">
            <div class="collapse-icon" @click="collapseToggle">
              <i class="el-icon-menu"></i>
            </div>
          </el-col>
          <el-col :span="4" class="userinfo">
            <el-dropdown trigger="hover">
              <span class="el-dropdown-link userinfo-inner">用户名</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的消息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '65px' : '250px'">
        <el-menu :collapse="isCollapse" :collapse-transition="false">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      systemTitle: '后台管理系统'
    }
  },
  methods: {
    collapseToggle() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>


<style lang="stylus" scoped>
system-title(titleWidth = 250px)
  width titleWidth
  height 60px
  line-height 60px
  font-weight 900
  font-size 20px
  color #fff
  border-right 1px solid #eee
  padding 0 20px

.el-header
  background-color #545C64
  padding 0
  height 60px

.system-title-collapse
  system-title(250px)

.system-title-collapsed
  system-title(65px)

.collapse-icon
  height 60px
  line-height 60px
  font-weight 900
  font-size 20px
  color #fff
  cursor pointer
  padding 0 10px
</style>



