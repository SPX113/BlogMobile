<template>
  <div class="top">
    <van-image
            fit="cover"
            :src="articleInfo.photo"
    />
    <div class="info">
      <h1>{{ articleInfo.title }}</h1>
      <div class="tags">
        <van-tag type="danger" size="large" color="rgb(238,233,228)" v-for="(value,index) in articleInfo.tags" :key="index">
          {{value}}
        </van-tag>
      </div>
      <p class="time"><i class="iconfont icon-bi">  {{ articleInfo.createtime }}</i> </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Top",
    props:{
      articleInfo:{
        type : Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .van-image{
    height: 60vh;
  }
  .info{
    position: absolute;
    top: 15vh;
    color: white;
    margin: 20px;
  }
  .info h1{
    font-size: 35px;
  }
  .van-tag{
    margin-right: 10px;
    font-size: 15px;
    color: #222222;
    margin-top: 10px;
    margin-bottom: 10px;
  }

</style>