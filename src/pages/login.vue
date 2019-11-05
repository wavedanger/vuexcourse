<template>
  <div class="login">
    <div class="title">
      <img src="../assets/logo.png" width="50" height="50" alt="">
      <h1>登录</h1>
    </div>
    <div class="section">
      <input
        type="text"
        v-model="form.account"
        placeholder="请输入你的帐号"
      >
    </div>
    <div class="section">
      <input
        type="password"
        v-model="form.password"
        placeholder="请输入你的密码"
      >
    </div>
    <button @click="login" class="btn">登录</button>
  </div>
</template>
<script>
import store from '../store/'
export default {
  data(){
    return{
      form:{
        account:"",
        password:""
      }
    }
  },
  methods:{
    login(){
      let that=this
      if(!that.form.account&&!that.form.password){
        return false;
      }
      setTimeout(()=>{
        store.commit('login',{
          account:that.form.account,
          password:that.form.password
        })
        store.commit("setMemberInfo",{
          userStatus:0,
          vipLevel:0
        })
        that.$router.push({
          path:"./"
        })
      },500)
    }
  }
}
</script>
<style scoped>
.login {
  text-align: center;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
}
.section input {
  margin: 10px auto;
  width: 60%;
  padding: 5px;
  border: none;
  border-bottom: 1px solid #41b883;
}
.btn {
  margin-top: 20px;
  padding: 5px;
  background-color: #41b883;
  color: white;
  width: 60%;
}
</style>
