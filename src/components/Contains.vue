<template>
  <el-container>

    <el-aside style="width:20%; border: 1px solid #eee"><router-link to="/main">Go to main</router-link>
    </el-aside>
    <el-main style="width:80%; border: 1px solid #eee"> 
        <router-view></router-view>
</el-main>

  </el-container>
</template>

<script>
export default {
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
