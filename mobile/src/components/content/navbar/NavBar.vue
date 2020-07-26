<template>
  <div class="nav-bar">
    <i class="iconfont icon-gengduo" @click="showPopup"></i>
    <van-popup v-model = "show" :round="true" position="right" >
      <div class="nav">
        <ul>
          <li :class="{active : currentIndex === index}" v-for="(item,index) in title" :key="index" @click="select(index)" >{{item}}</li>
        </ul>
      </div>
    </van-popup>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {
        title: ['主页','时间线','留言板','关于'],
        path:['/index','/timeline','/message','/about'],
        show: false,
      };
    },

    methods: {
      showPopup() {
        this.show = true;
      },
      select(index){
        this.$router.push(this.path[index])
        this.show = false
      }
    },
    computed: {
      currentIndex() {
        for (let i = 0; i < this.path.length; i++) {
          if (this.$route.path.indexOf(this.path[i]) !== -1) {
            return i
          }
        }
      }
    }
  }
</script>

<style scoped>
  .nav-bar i{
    font-size: 30px;
    font-weight: 700;
    height: 40px;
    line-height: 40px;
    margin-top: 40px;
    position: absolute;
    right: 40px;
    z-index: 1;
    color: white;
  }
  .nav li {
    font-size: 20px;
    font-weight: 700;
    margin: 10px 10px;
  }
  .active {
    color: rgb(240,65,85);
  }
</style>