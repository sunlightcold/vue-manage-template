<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="24">
          <el-col
            :span="10"
            :class="isCollapse ? 'system-title-collapsed' : 'system-title-collapse'"
          >{{ isCollapse ? '' : systemTitle }}</el-col>
          <el-col :span="1">
            <div class="collapse-icon">
              <i
                class="el-icon-menu"
                @click="collapseToggle"
              ></i>
            </div>
          </el-col>
          <el-col :span="9">
            <top-breadcrumb></top-breadcrumb>
          </el-col>
          <el-col
            :span="4"
            class="user-info"
          >
            <el-dropdown>
              <span class="el-dropdown-link">未登录</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '65px' : '250px'">
        <el-menu
          :collapse="isCollapse"
          :collapse-transition="false"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <router-link
              to="/index/home"
              tag="div"
            >
              <i class="el-icon-menu"></i>
              <span>首页</span>
            </router-link>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-operation"></i>
              <span slot="title">嵌套路由</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <router-link
                  to="/nested/menu1"
                  tag="div"
                >
                  <i class="el-icon-c-scale-to-original"></i>
                  <span>菜单1</span>
                </router-link>
              </el-menu-item>
              <el-menu-item index="2-2">
                <router-link
                  to="/nested/menu2"
                  tag="div"
                >
                  <i class="el-icon-document-delete"></i>
                  <span>菜单2</span>
                </router-link>
              </el-menu-item>
              <el-menu-item index="2-3">
                <router-link
                  to="/nested/menu3"
                  tag="div"
                >
                  <i class="el-icon-attract"></i>
                  <span>菜单3</span>
                </router-link>
              </el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <span slot="title">菜单4</span>
              <el-menu-item index="2-4-1">
                <router-link
                  to="/nested/menu4/menu4-1"
                  tag="div"
                >
                  <span>菜单4-1</span>
                </router-link>
              </el-menu-item>
              <el-menu-item index="2-4-2">
                <router-link
                  to="/nested/menu4/menu4-2"
                  tag="div"
                >
                  <span>菜单4-2</span>
                </router-link>
              </el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item
            index="3"
            disabled
          >
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link
              to="/index/table"
              tag="div"
            >
              <i class="el-icon-s-data"></i>
              <span>Table</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="5">
            <router-link
              to="/index/tags"
              tag="div"
            >
              <i class="el-icon-s-management"></i>
              <span>Tags</span>
            </router-link>
          </el-menu-item>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-s-operation"></i>
              <span slot="title">Echarts 图表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">
                <router-link
                  to="/charts/bar"
                  tag="div"
                >
                  <i class="el-icon-c-scale-to-original"></i>
                  <span>柱状图</span>
                </router-link>
              </el-menu-item>
              <el-menu-item index="6-2">
                <router-link
                  to="/charts/line"
                  tag="div"
                >
                  <i class="el-icon-document-delete"></i>
                  <span>折线图</span>
                </router-link>
              </el-menu-item>
              <el-menu-item index="6-3">
                <router-link
                  to="/charts/pie"
                  tag="div"
                >
                  <i class="el-icon-document-delete"></i>
                  <span>散点图</span>
                </router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <float-breadcrumb></float-breadcrumb>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import topBreadcrumb from '@/components/breadcrumb/topBreadcrumb'
import floatBreadcrumb from '@/components/breadcrumb/floatBreadcrumb'

export default {
  components: {
    topBreadcrumb,
    floatBreadcrumb
  },
  data() {
    return {
      isCollapse: false,
      systemTitle: '后台管理系统',
    }
  },
  methods: {
    collapseToggle() {
      this.isCollapse = !this.isCollapse
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath)
    }
  }
}
</script>

<style lang="stylus" scoped>
system-title(titleWidth = 250px) {
  width titleWidth
  height 60px
  line-height 60px
  font-weight 900
  font-size 20px
  color #fff
  padding 0 20px
}

.el-header {
  background-color rgb(48, 65, 86)
  padding 0
  height 60px
}

.system-title-collapse {
  system-title(250px)
  border-right 1px solid #eee
}

.system-title-collapsed {
  system-title(65px)
  border-right 1px solid #eee
}

.collapse-icon {
  height 60px
  line-height 60px
  font-weight 900
  font-size 20px
  color #fff
  padding 0 10px

  .el-icon-menu {
    cursor pointer
  }
}

.user-info {
  system-title(100px)
  cursor pointer
  float right

  .el-dropdown {
    color #fff
  }
}

.el-menu {
  min-height 900px
}

.el-main {
  padding 0 10px
}
</style>



