<template>
  <div class="message-boadr">
    <div class="title">
      <van-divider content-position="left" :style="{ color: 'black', borderColor: 'black', padding: '0 16px',fontWeight : '700'}">
        <i class="iconfont icon-bi">留言板</i>
      </van-divider>
    </div>
    <div class="content">
      <div class="input">
        <van-field v-model="name" label="昵称" placeholder="请输入昵称" />
        <van-field
                  v-model="message"
                  rows="1"
                  autosize
                  label="留言"
                  type="textarea"
                  placeholder="请输入内容"
                  maxlength="100"
                  show-word-limit
          />
        <van-button type="primary" block @click="uploadMessage">提交留言</van-button>
      </div>
      <message-display :message="messageList" />
      <van-pagination
              v-model="currentPage"
              :total-items="totalpages"
              :show-page-size="3"
              force-ellipses
              @change="change"
      />
    </div>
  </div>
</template>

<script>
  import { getMessage ,uploadMessage} from "network/message";
  import {Notify} from "vant";

  import MessageDisplay from "./childComps/MessageDisplay";
  export default {
    name: "MessageBoard",
    components:{
      [Notify.Component.name]: Notify.Component,MessageDisplay
    },
    data(){
      return{
        currentPage : 1,
        totalpages : 0,
        messageList : [],
        name : '',
        message : ''

      }
    },
    created() {
      this.getMessage()
    },
    methods:{
      getMessage(){
        getMessage(this.currentPage).then(res => {
          this.totalpages = res.data[1].totalpage
          this.messageList = res.data[0]
          console.log(this.messageList)
        })
      },
      uploadMessage(){
        if(this.name === '' || this.message === '')
        {
          Notify({ type: 'danger', message: '输入框不能为空' })
        } else{
          uploadMessage(this.name,this.message).then(res => {
            Notify({ type: 'success', message: '留言成功' })
            this.name = ''
            this.message = ''
            this.getMessage()
          })
        }
      },
      change(page){
        this.currentPage = page
        this.getMessage()
      }
    }
  }
</script>

<style scoped>
  .van-divider i{
    font-size: 20px;
  }
  .title{
    padding-top: 10vh
  }
  .content{
    width: 90%;
    margin: 40px auto;
  }

</style>