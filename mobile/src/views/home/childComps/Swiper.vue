<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in recArticle" :key="index" @click="itemClick(item.id)">
        <van-image
                width="100vw"
                height="100vh"
                fit="cover"
                :src="item.photo"
        />
        <div class="info">
          <p class="title">{{item.title}}</p>
          <div>
            <van-tag type="danger" size="large" color="rgb(238,233,228)" v-for="(value,index) in item.tags" :key="index">
              {{value}}
            </van-tag>
          </div>
          <p>{{item.createtime | formatetime}}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    props:{
      recArticle:{
        type: Array,
        default(){
          return []
        }
      }
    },
    methods:{
      itemClick(id){
        this.$router.push('/detail/'+ id)
      }
    }
  }
</script>

<style scoped>

  .my-swipe .van-swipe-item {

  }
  .info{
    position: absolute;
    z-index: 10;
    top: 30vh;
    margin-left: 50px;
  }
  .title{
    font-size: 40px;
    color: white;
    font-weight: 700;
  }
  .van-tag{
    font-size: 15px;
    color: #222222;
    margin: 10px 5px;
  }
  .info p {
    color: white;
  }
</style>