<template>
  <div id="car-info">
    <van-nav-bar
      title="车辆信息"
      left-arrow
      @click-left="$router.push('/my')"
    />
    <div style="overflow: hidden; padding: 12px 12px 0;">
      <span class="car-type">
        <span class="all-type">全部车型</span>
        <van-icon name="arrow-down" />
      </span>
    </div>
    <div class="car-list">
      <div 
        class="car-box"
        v-for="item in carList"
        :key="item.id"
        @click="$router.push('/carInfo')"
      >
        <p class="car-card">{{ item.plateNumber }}</p>
        <img v-if="item.carType == 1" src="@/assets/my/carType1.png" alt="">
        <img v-else src="@/assets/my/carType2.png" alt="">
      </div>
    </div>
    <div class="button-box">
      <van-button 
        type="info" 
        block
        @click="$router.push('/addCar')"
      >
        添加车辆
      </van-button>         
    </div>    
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar, Icon } from 'vant';

Vue.use(Icon);
Vue.use(NavBar);
export default {
  data() {
    return {
      carList: [
        {
          id: '1',
          plateNumber: '浙A05226',
          carType: 1,
        },
        {
          id: '2',
          plateNumber: '浙A05226',
          carType: 1,
        },
        {
          id: '3',
          plateNumber: '浙A05226',
          carType: 2,
        },
        {
          id: '4',
          plateNumber: '浙A05226',
          carType: 2,
        },
        {
          id: '5',
          plateNumber: '浙A05226',
          carType: 2,
        },
        {
          id: '6',
          plateNumber: '浙A05226',
          carType: 2,
        },
      ]
    }
  }

}
</script>

<style lang="scss" scoped>
  #car-info{
    height: 100%;
    background-color: #F9FAFF;
  }
  .car-type{
    float: right;
    .all-type{
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;        
    }
  }
  .car-list{
    height: 80%;
    padding: 16px;
    overflow: auto;
    .car-box{
      height: 100px;
      padding: 24px;
      margin-bottom: 16px;
      background: url('~@/assets/my/carInfo.png');
      background-size: 100% 100%;
      .car-card{
        font-size: 20px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #333333;
        margin-bottom: 12px;        
      }
    }
  }
  .button-box{
    padding: 16px;
    width: 100%;
    border-top: 1px solid #eee;
    position: fixed;
    bottom: 0;
  }
</style>
