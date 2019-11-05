<template>
  <div class="index">
    <h1>你好</h1>
    <p>尊敬的<span class="vip">{{memberInfo}}</span>,欢迎来到vue课程！</p>
    <ul>
      <li v-for="(item,index) in courselist" :key="index" @click="toDetail(item)">
        <Course :title="item.title" :about="item.about"/>
      </li>
    </ul>
    <button class="btn" @click="pay">充值</button>
  </div>
</template>
<script>
import course from "../components/course"
import {mapGetters,mapState} from 'vuex'
export default {
  name:"index",
  data(){
    return{
      courselist:[
        {
          id:1,
          title:"学习vuex1",
          about:"免费课程",
          userStatus:0,
          vipLevel:0
        },
         {
          id:2,
          title:"学习vuex2",
          about:"实战课程",
          userStatus:1,
          vipLevel:1
        },
         {
          id:3,
          title:"学习vuex3",
          about:"高级课程",
          userStatus:2,
          vipLevel:2
        }
      ]
    }
  },
  computed:{
    ...mapState(['userStatus','vipLevel']),
    ...mapGetters(['memberInfo'])
  },
  methods:{
    pay(){
      this.$router.push("./userCenter")
    },
    toDetail(item){
      const res=this.check(item)
      if(res){
        this.$router.push({
        path:`./course/${item.id}?title=${item.title}`
      })
      }else{
        alert("没有权限")
      }
    },
    check(item){
      const userStatus=this.$store.state.userStatus
      const vipLevel=this.$store.state.vipLevel
      if(userStatus>=item.userStatus&&vipLevel>=item.vipLevel){
        return true
      }else{
        return false
      }
    }
  },
  components:{
    Course:course
  }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
.vip {
  color: red;
}
.btn {
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  padding: 5px;
  background-color: #41b883;
  color: white;
  width: 60%;
}
</style>
