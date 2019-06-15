<template>
  <div class="tags">
    <el-tabs type="border-card">
      <el-tab-pane label="用户管理">
        <el-table
          :data="tableData"
          border
          highlight-current-row
          :default-sort="{prop: 'date', order: 'descending'}"
          style="width: 100%"
        >
          <el-table-column
            prop="date"
            label="日期"
            sortable
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            sortable
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
          >
          </el-table-column>
          <el-table-column
            prop="tag"
            width="100"
            sortable
            label="标签"
          >
            <template slot-scope="scope">
              <el-tag
                :type="scope.row.tag === '家' ? 'primary' : 'success'"
                disable-transitions
              >{{scope.row.tag}}</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '公司'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '公司'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '公司'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '公司'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.tags {
  margin-top 20px
}
</style>