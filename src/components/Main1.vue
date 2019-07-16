<template>
  

 <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="token"
        label="token"
        width="180">
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
       // token = "eyJhbGciOiJub25lIn0.eyJzdWIiOiJ1c2VyIiwiY3JlYXRlZCI6MTU2MDQ5OTgzMzgyNCwiZXhwIjoxNTYwNDk5ODQzfQ."
        fetch("http://localhost:8080/login"
        ,{
            method:'POST',
            headers:{
             // Access-Control-Allow-Origin:""
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
            username:'user',
            password:'a5665626-1a87-4f13-bbda-ee187e1e6b18',}),}
       )
        .then(response => response.json())
        .then(data => console.log(data))//{_this.tableData=data})
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
