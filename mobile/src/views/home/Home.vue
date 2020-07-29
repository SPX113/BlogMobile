<template>
  <div class="home">
    <swiper :recArticle="recArticle" />
    <article-list :articleList="articleList"/>
    <van-pagination
            v-model="currentPage"
            :total-items="totalpages"
            :show-page-size="3"
            force-ellipses
            @change="change"
    />
  </div>
</template>

<script>
  import { recommedArticle , getArticleByPage} from "network/home";

  import Swiper from "./childComps/Swiper";
  import ArticleList from "./childComps/ArticleList";

  export default {
    name: "Home",
    components:{
      Swiper,ArticleList
    },
    data(){
      return{
        currentPage : 1,
        recArticle : [],
        totalpages : 0,
        articleList : []
      }
    },
    created() {
      this.getrecommend()
      this.getByPage()
    },
    methods:{
      getrecommend() {
        recommedArticle().then(res => {
          this.recArticle = res.data
          for (let i of this.recArticle) {
            i.tags = i.tags.split(',')
          }
        })
      },

      getByPage() {
        getArticleByPage(this.currentPage).then(res => {
          this.totalpages = res.data.totalnum
          this.articleList = res.data.result
          for (let i of this.articleList) {
            i.tags = i.tags.split(',')
          }
          console.log(res.data)
        })
      },

      change(value){
        this.currentPage = value
        this.getByPage()
      }
    }
  }
</script>

<style scoped>


</style>