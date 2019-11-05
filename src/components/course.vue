<template>
  <div class="card">
    <img src="../assets/logo.png" alt="" width="100" height="50">
    <div class="desc">
      <div class="title">{{title}}</div>
      <div class="about">{{about}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    title:String,
    about:String
  }
}
</script>
<style scoped>
.card {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.card img {
  margin-right: 10px;
}
.about {
  color: red;
}
</style>

