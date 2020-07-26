<template>
  
</template>

<script>
  import { getDetail , getArticle , upLoadCommnet , giveStar } from 'network/detail'
  export default {
    name: "Detail",
    data(){
      return{
        id : 0,
        articleInfo : {}
      }
    },
    created() {
      this.id = this.$route.params.id
      this.getDetail()
    },
    methods:{
      getDetail(){
        getDetail(this.id).then(res => {
          this.articleInfo = res.data
        })
      }
    }
  }
</script>

<style scoped>

</style>