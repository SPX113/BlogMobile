<template>
  <div class="suspend">
    <div class="menu" @click="menuPopup">
      <i class="iconfont icon-jichutubiao-XC-mulu"></i>
      <p>目录</p>
    </div>
    <van-popup v-model="menuShow" position="left" round :style="{ maxWidth: '70%' }" class="titleShow">
      <p v-for="(item,index) in menu" :key="index"   @click="jump(item.id)" >
        {{item.body}}
      </p>
    </van-popup>
    <div class="stars" :class="{ active : islike }" @click.once="starClick">
      <i class="iconfont icon-xingxing"></i>
      <p>{{stars}}</p>
    </div>
    <div class="pinglun" @click="showPopup">
      <i class="iconfont icon-pinglun"></i>
      <p>{{comments}}</p>
    </div>
    <van-popup v-model="show" position="bottom" round class="comments"  >
      <div class="container">
        <p class="title">{{comments}} 条评论</p>
        <div class="comment-item" v-for="(item,index) in commentsList" :key="index">
          <div class="name">
            {{item.name}}
          </div>
          <div class="comment">
            {{item.comment}}
          </div>
          <div class="author" v-if="item.author">
            <p>博主</p>
            <div>{{item.author}}</div>
          </div>
          <div class="createtime">
            {{item.createtime | formateDate }}
          </div>
          <van-divider />
        </div>
        <div class="uploadComment">
          <div>
            <van-field v-model="name" label="昵称" placeholder="请输入昵称" />
            <van-button type="default" @click="upload">
              <i class="iconfont icon-bi"> 评论</i>
            </van-button>
          </div>
          <van-field
                  v-model="message"
                  rows="1"
                  autosize
                  label="评论内容"
                  type="textarea"
                  placeholder="请输入内容"
                  maxlength="100"
                  show-word-limit
          />
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import {Notify} from "vant";

  export default {
    name: "Suspend",
    components:{
      [Notify.Component.name]: Notify.Component
    },
    data(){
      return{
        show : false,
        menuShow : false,
        message : '',
        name : ''
      }
    },
    filters:{
      formateDate(datetime) {
        function addDateZero(num) {
          return (num < 10 ? "0" + num : num);
        }
        let d = new Date(datetime);
        let formatdatetime = d.getFullYear() + '-' + addDateZero(d.getMonth() + 1) + '-' + addDateZero(d.getDate()) + ' ' + addDateZero(d.getHours()) + ':' + addDateZero(d.getMinutes()) + ':' + addDateZero(d.getSeconds());
        return formatdatetime;
      }
    },
    props:{
      stars:{
        type: Number,
        default : 0
      },
      comments :{
        type : Number,
        default: 0
      },
      islike:{
        type : Boolean,
        default : false
      },
      commentsList:{
        type: Array,
        default(){
          return []
        }
      },
      menu:{
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods:{
      starClick(){
        this.$emit('starClick')
      },
      showPopup() {
        this.show = true;
      },
      menuPopup(){
        this.menuShow = true
      },
      upload(){
        if(this.name === '' || this.message === '')
        {
          Notify({ type: 'danger', message: '输入框不能为空' })
        }
        else{
          this.$emit('upload',this.name,this.message)
          this.name =''
          this.message = ''
        }
      },



      jump(idname){
        document.querySelector('#'+idname).scrollIntoView(true);
        this.menuShow = false
      }


    }
  }
</script>

<style scoped>
  .suspend{
    position: fixed;
    background-color: rgba(0,0,0,0.1);
    top: 35%;
    right: 4px;
    padding: 10px;
    display: flex;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  .suspend i{
    font-size: 20px;
  }
  .suspend .menu,.stars{
    margin: 5px 0;
  }
  .suspend p{
    font-size: 15px;
  }
  .active{
    color: red;
  }
  .comments{
    max-height: 90vh;
  }
  .container{
    padding-bottom: 110px;
  }
  .title{
    font-weight: 700;
    margin: 5px;
  }
  .comment-item{
    text-align: left;
    padding: 10px 5%;
  }
  .comment-item div{
    margin-bottom: 10px;
  }
  .name{
    font-size: 18px;
    font-weight: 700;
    border-left: #b3d4fc 4px solid;
    padding-left: 3px;
  }
  .comment{
    text-indent: 2rem;
  }

  .author{
    margin-left: 50px;
  }
  .author p{
    font-size: 18px;
    font-weight: 700;
    border-left: red 4px solid;
  }
  .author div{
    text-indent: 2rem;
  }
  .createtime{
    text-align: right;
    color: grey;
    font-size: 14px;
  }
  .uploadComment{
    position: fixed;
    width: 100%;
    bottom: 0;
    background-color: white;
    border-top: #ebedf0 solid 1px;
    padding-top: 5px;
  }
  .uploadComment div{
    display: flex;
  }
  .uploadComment div .van-field{
    width: 40vh;
  }
  .uploadComment div .van-button{
    text-align: center;
  }
  .uploadComment div .van-button i{
    font-size: 15px;
  }
  .titleShow p{
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    margin-top: 10px;
  }
</style>