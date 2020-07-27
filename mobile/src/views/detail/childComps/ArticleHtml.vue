<template>
    <div class="markdown-body" v-html="mdhtml" v-highlight>
  </div>
</template>

<script>
  export default {
    name: "ArticleHtml",
    props:{
      mdhtml:{
        type : String,
        default : ''
      }
    }
  }
</script>

<style scoped>
  @import "~github-markdown-css/github-markdown.css";
  .markdown-body{
    padding: 20px 5%;
  }
</style>