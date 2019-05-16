<template>
  <el-container  id="app">
    <el-header  style="height: 200px; border: 1px solid #eee" >
<h1>异常事件直报</h1>
</el-header>
<router-view></router-view>
  <el-footer  style="width:100%; height: 50px;border: 1px solid #eee">Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'App',
}
  
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
