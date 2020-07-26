<template>
  <div class="article-list" v-if="articleList.length !== 0">
    <div class="list-item" v-for="(item,index) in articleList" :key="index">
      <div class="image">
        <van-image fit="cover" :src="item.photo" radius="8" height="200"/>
      </div>
      <div class="info">
        <h2>{{item.title}}</h2>
        <div class="tags">
          <van-tag type="danger" size="large" color="rgb(238,233,228)" v-for="(value,index) in item.tags" :key="index">
            {{value}}
          </van-tag>
        </div>
        <p class="describe" v-if="item.describe">
          {{item.describe}}
        </p>
        <div class="footer">
          <span>{{item.createtime | formatetime}}</span>
          <ul>
            <li><i class="iconfont icon-yanjing"/> {{ item.watches }}</li>
            <li><i class="iconfont icon-pinglun"/> {{ item.comments }}</li>
            <li><i class="iconfont icon-xingxing"/> {{ item.stars }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ArticleList",
    props:{
      articleList:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .article-list{
    width: 85%;
    margin: 0 auto;

  }
  .list-item{
    background-color: white;
    border-radius: 8px;
    position: relative;
    top: -10vh;
    padding:10px;
    margin-bottom: 20px;
  }
  .info{
    margin: 10px 20px;
  }
  .van-tag{
    color: black;
    font-size: 15px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .describe{
    margin: 10px 0;
  }
  .footer span{
    font-size: 10px;
  }
  .footer ul{
    list-style-type: none;
    display: inline;
    float: right;
  }
  .footer li{
    font-size: 10px;
    display: list-item;
    float: left;
    margin-left: 10px;
  }
</style>