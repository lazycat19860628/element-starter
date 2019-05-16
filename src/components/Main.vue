<template>
  

 <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="age"
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


</template>

<script>
export default {
    data() {
        return {
          tableData: []
        }
      },
    
    mounted:function(){ //mounted　表示这个 Vue 对象加载成功了
       let _this = this;
        fetch("http://localhost:8080/").then(response => response.json())
  .then(data => {_this.tableData=data})
  .catch(e => console.log("Oops, error", e))
    }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
