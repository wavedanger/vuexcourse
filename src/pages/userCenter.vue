<template>
  <div class="user">
    <h1>用户中心</h1>
    <div class="message">
      <div>帐号</div>
      <div>{{userInfo.account}}</div>
    </div>
    <div class="message">
      <div>身份</div>
      <div>{{memberInfo}}</div>
    </div>
    <ul>
      <li v-for="(item,index) in payList" :key="index">
        <Pay :name="item.name" :price="item.price" :id="item.id" @buyVip="buyVip"/>
      </li>
    </ul>
  </div>
</template>
<script>
import Pay from "../components/pay"
import store from "../store"
import {mapState,mapGetters} from "vuex"
export default {
  data(){
    return{
      payList:[
        {
          id:1,
          name:"普通会员",
          price:"10.00",
          vipLevel:0,
          userStatus:0,
        },
        {
          id:2,
          name:"vip1会员",
          price:"50.00",
          vipLevel:1,
          userStatus:1,
        },
        {
          id:3,
          name:"vip2会员",
          price:"100.00",
          vipLevel:2,
          userStatus:2,
        },
        {
          id:4,
          name:"vip3会员",
          price:"1000.00",
          vipLevel:3,
          userStatus:3,
        }
      ]
    }
  },
  methods:{
    buyVip(e){
      let that=this
      let obj={}
      that.payList.forEach((val)=>{
        if(val.id===e.id){
         obj.vipLevel=val.vipLevel
         obj.userStatus=val.userStatus
        }
      })
      store.dispatch('buyVip',obj).then(res=>{
        alert(res)
      })
    }
  },
  computed:{
    ...mapState(['userInfo']),
    ...mapGetters(['memberInfo'])
  },
  components:{
    Pay
  }
}
</script>
<style scoped>
.user {
  padding: 10px;
  text-align: center;
}
.user ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.message {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 5px;
}
</style>

