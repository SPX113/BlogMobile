<template>
  <div class="detail">
    <top :articleInfo = "articleInfo" />
    <div class="container">
      <article-html :mdhtml="mdhtml"/>
    <suspend :stars="stars" :comments="comments" :islike="islike" :commentsList="commentsList" @starClick="starClick"/>
    </div>
  </div>
</template>

<script>
  import { getDetail , getArticle , upLoadCommnet , giveStar , getComments} from 'network/detail'
  import marked from 'marked'

  import Top from "./childComps/Top";
  import ArticleHtml from "./childComps/ArticleHtml";
  import Suspend from "./childComps/Suspend";

  export default {
    name: "Detail",
    components:{
      Top,ArticleHtml,Suspend
    },
    data(){
      return{
        id : 0,
        articleInfo : {},
        mdhtml : '',
        stars : 0,
        comments : 0,
        islike : false,
        commentsList : []
      }
    },
    created() {
      this.id = this.$route.params.id
      this.getDetail()
      this.getComments()
    },
    methods:{
      getDetail(){
        getDetail(this.id).then(res => {
          this.articleInfo = res.data
          //数据处理
          this.articleInfo.tags = this.articleInfo.tags.split(',')
          this.articleInfo.createtime = this.articleInfo.createtime.substr(0, 10)

          this.stars = this.articleInfo.stars
          this.comments = this.articleInfo.comments

        }).then(res => {
          getArticle(this.articleInfo.article).then(res => {
            this.mdhtml = marked(res.data)
          })
        })
      },

      getComments(){
        getComments(this.id).then(res => {
          this.commentsList = res.data
          console.log(this.commentsList)
        })
      },

      starClick(){
        giveStar(this.id).then(res => {
          this.islike = true
          this.stars ++
        })
      }
    }
  }
</script>

<style scoped>
  .container{
    width: 90%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    position: relative;
    top: -15vh
  }
  .van-divider i{
    margin: 20px 0;
    color: #222222;
    font-size: 20px;
    font-weight: 700;
  }

</style>