<template>
  <el-container  id="app">
    <el-header  style="height: 200px; border: 1px solid #eee" id = "header">

</el-header>
  <el-container>
    <el-aside style="width:20%; border: 1px solid #eee">Aside

    </el-aside>
    <el-main style="width:80%; border: 1px solid #eee">  <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
</el-main>
  </el-container>
  <el-footer  style="width:100%; height: 50px;border: 1px solid #eee">Footer</el-footer>
  </el-container>
</template>

<script>
export default {
    data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }

  
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
