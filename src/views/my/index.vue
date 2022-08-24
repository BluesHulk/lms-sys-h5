<template>
  <div class="my-page">   
    <div class="content">
      <div class="content-top">
        <div class="top-text">
          <span>我的</span>
        </div>
        <div class="top-service">
          <div class="service-box">
            <img src="@/assets/my/service.png" alt="service">
            联系客服
          </div>
        </div>
        <div class="header-image">
          <img src="@/assets/my/headerImg.png" alt="headerImg">
          <span style="margin-left: 12px;">李林群</span>
        </div>
      </div>
      <div class="content-box">
        <div class="driver-info common-box" @click="$router.push('/driverInfo')">
          <div class="content-title">司机信息</div>
          <div>
            <span class="content-description">司机信息未完善</span>
            <span class="driver-complete">去完善></span>
          </div>
        </div>
        <div class="car-manage common-box" @click="$router.push('/carList')">
          <div class="content-title">车辆管理</div>
          <div class="content-description">点击进入车辆管理</div>
        </div>
        <div class="sys-set common-box" @click="$router.push('/systemSet')">
          <div class="content-title">系统设置</div>
          <div class="content-description">点击进入系统设置</div>
        </div>
      </div>
    </div>
    <iItab :tabList="tabList" @tab-click="tabClick" :initSelect="tabIndex"></iItab>
  </div>
</template>

<script>
import iItab from '../../components/tab/index.vue'
import constant from '../../common/js/constant'

export default {
  name: 'Task',
  data() {
    return {
      tabList:constant.recommendTabs,
      tabIndex:3
    }
  },
  components: {
    iItab,
  },
  methods:{
        tabClick(tabIndex) {
        this.tabIndex = tabIndex;
       },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.my-page{
  display: -webkit-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.content{
    width: 100%;
    height: 100%;
    background-color: #4276F6;
    .content-top{
      height: 32%;
      padding: 16px;
      .top-text{
        text-align: center;
        font-size: 18px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #fff;
        margin-top: 12px;
      }
      .top-service{
        overflow: hidden;
        margin-top: 36px;
        .service-box{
          float: right;
          color: #fff;
        }
      }
      .header-image{
        display: flex;
        align-items: center;
        padding-left: 16px;
        font-size: 20px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        margin-top: 32px;        
      }
    }
    .content-box{
      height: 68%;
      background-color: #F9FAFF;
      border-radius: 20px 20px 0 0;
      bottom: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .content-title{
        font-size: 20px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        margin-bottom: 16px;
      }
      .content-description{
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
      }
      .common-box{
        width: 90%;
        height: 100px;
        padding: 24px;
        background-size:100% 100%;
      }      
      .driver-info{
        margin-top: -36px;
        background: url('~@/assets/my/driver.png') no-repeat;
        .driver-complete{
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #FFF800;
        }
      }
      .car-manage{
        margin-top: 12px;
        background: url('~@/assets/my/car.png') no-repeat;
      }
      .sys-set{
        margin-top: 12px;
        background: url('~@/assets/my/set.png') no-repeat;
      }
    }
}
</style>
