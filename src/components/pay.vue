<template>
  <div class="card">
    <div class="name">{{name}}</div>
    <div class="desc">
       <div class="price"><span>{{price}}元</span>/30天</div>
       <button @click="buy">购买</button>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    id:Number,
    name:String,
    price:String
  },
  methods:{
    buy(){
      this.$emit("buyVip",{id:this.id})
    }
  }
}
</script>
<style scoped>
.card {
  background: linear-gradient(to bottom, #41b883, #35495e);
  border-radius: 10px;
  padding: 10px;
  margin: 10px auto;
  color: white;
}
.name {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5px;
}
.desc {
  display: flex;
  justify-content: space-between;
}
.price span {
  font-size: 24px;
  color: #41b883;
}
.desc button {
  background: none;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
}
</style>

