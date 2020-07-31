<template>
  <div class="about">
    <div class="info">
      <el-card shadow="hover" class="box-card">
      <img src="~assets/head.jpg">
      <p>SPX</p>
      <P> 肇庆学院</P>
      <p class="my">因为你不会，所以你才会  ----千层饼</p>
      <div class="link">
        <ul>
          <li><a href="https://github.com/SPX113"><i class="iconfont icon-github"></i></a></li>
          <li>
            <el-popover
                    placement="bottom"
                    title="SPX_11-13"
                    width="100"
                    trigger="click">
              <span slot="reference"> <i class="iconfont icon-weixin"></i></span>
            </el-popover>
          </li>
          <li>
            <el-popover
                    placement="bottom"
                    title="1137893057@qq.com"
                    width="180"
                    trigger="click">
              <span slot="reference"> <i class="iconfont icon-youxiang"></i></span>
            </el-popover>
          </li>
        </ul>
      </div>
      </el-card>

    </div>
  </div>
</template>

<script>
  export default {
    name: "About"
  }
</script>

<style scoped>
  .about{
    height: 100vh;
    background-color: #84AF9B;
  }
  .info{
    position: relative;
    top:25vh;
    width: 85%;
    margin:  0 auto;
    text-align: center;
    background-color: white;
    font-size: 18px;
  }
  .my{
    font-weight: bold;
  }
  a{
    text-decoration: none;
  }
  .icon img{
    width: 30px;
    height: 30px;
    padding: 10px 10px;
  }
  .link{
    padding-top: 10px;
  }
  .link li{
    display: inline;
    padding: 10px;
  }
  .iconfont{
    font-size: 30px;
    color: black;
  }
  .info img{
    border-radius: 50%;
    width: 40%;
    height: 40%;
    margin: 15px 0;
  }

</style>