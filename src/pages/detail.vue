<template>
  <div class="detail">
    <h1>欢迎来到课程{{this.$route.query.title}}</h1>
    <img src="../assets/logo.png" alt="">
    <button class="btn" @click="share">分享</button>
  </div>
</template>
<script>
import store from '../store'
export default {
 methods:{
   share(){
     let res=confirm("课程分享地址：wavedanger.top")
     if(res){
      store.dispatch('getFreeVip').then(res=>{
        alert(res)
      })
     }else{
       alert("已取消分享")
     }
   }
 }
}
</script>
<style scoped>
.detail {
  text-align: center;
}
.btn {
  margin-top: 20px;
  padding: 5px;
  background-color: #41b883;
  color: white;
  width: 60%;
}
</style>

