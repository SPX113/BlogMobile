<template>
  <div class="container">
    <div class="time-line">
    <el-timeline>
      <el-timeline-item color="#c7c6c5" v-for="(item,index) in message" :timestamp="item.createtime | formatetime" placement="top" :key="index">
        <el-card>
          <h3>{{item.title}}</h3>
          <p>{{item.describe}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
    </div>
  </div>
</template>

<script>
  import { getTimeLine } from "network/timeline";

  export default {
    name: "TimeLine",
    data(){
      return{
        message : []
      }
    },
    created() {
      getTimeLine().then(res => {
        this.message = res.data
      })
    }
  }
</script>

<style scoped>
  .container{
    padding-top: 12vh;
  }
  .time-line{
    margin-left: 5%;
    margin-right: 5%;
  }
  h3{
    margin-bottom: 8px;
    color: #921f02;
    font-size: 20px;
  }
  p{
    margin-bottom: 8px;
    line-height: 25px;
  }
  >>>.el-timeline-item__timestamp{
    color: #909399;
  }
  >>>.el-timeline-item__tail{
    border-left: 2px solid #c7c6c5;
  }
</style>