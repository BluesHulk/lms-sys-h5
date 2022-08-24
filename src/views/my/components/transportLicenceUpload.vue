<template>
  <div id="after-upload">
    <div v-if="notice" class="notice-box" :class="status == 2 ? 'danger-box' : 'warning-box'">
      <img v-if="status == 2" src="@/assets/my/jinggao.png" alt="">
      <img v-else src="@/assets/my/warning.png" alt="">
      <p>驳回原因：身份证照片模糊不清</p>
    </div>
    <div class="current-state">
      <img :src="statusImg[status]" alt="img">
    </div>
    <div class="state-text">
      <h2 class="current-text">{{ statusObj[status] }}</h2>
      <p class="current-hint">{{ statusText[status] }}</p>
    </div>
    <div class="id-info">
      <p class="id-text">
        道路运输证信息
        <span class="edit-area">
          <van-icon name="edit" @click="$emit('change-info')" />
          修改
        </span>
      </p>
      <van-divider 
      dashed 
      :hairline="false"
      :style="{ borderColor: '#ddd' }"
      />         
        <div class="img-box">
          <img src="@/assets/my/idFront.png" alt="">
        </div>          
    </div>
    <div class="button-box">
      <van-button 
        type="info" 
        block
      >
        重新提交
      </van-button>         
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Divider, Button } from 'vant';

Vue.use(Divider);
Vue.use(Button);

export default {
  name:'AfterUpload',
  data() {
    return {
      status: 1,
      statusObj: {
        1: '审核中',
        2: '未通过',
        3: '已完成',
        4: '已过期',
      },
      statusText: {
        1: '道路运输证信息审核中，请耐心等待',
        2: '审核未通过，请重新提交',
        3: '您的道路运输证信息已通过审核',
        4: '您的道路运输证信息已过期',
      },
      statusImg: {
        1: require('@/assets/my/shenhezhong.png'),
        2: require('@/assets/my/weitongguo.png'),
        3: require('@/assets/my/tongguo.png'),
        4: require('@/assets/my/yiguoqi.png'),
      },    
      notice: '',      
    }
  }

}
</script>

<style lang="scss" scoped>
#after-upload{
  height: 100%;
  width: 100%;
}
.notice-box{
  height: 48px;
  line-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    margin-left: 8px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
  }
}
.warning-box{
  background: #FFF7EE;
  color: #FEAC49;
}
.danger-box{
  background: #FFF1F0;
  color: #FF3B30;    
}
.current-state{
  height: 24%;
}
.state-text{
  text-align: center;
  margin-bottom: 24px;
  .current-text{
    font-size: 22px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
    margin-bottom: 12px;    
  }
  .current-hint{
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
  }
}
.id-info{
  width: 96%;
  height: 48%;
  margin: 0 auto;
  padding: 16px;
  box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.1000);
  border-radius: 4px;
  overflow: auto;
  .id-text{
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
    .edit-area{
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #4276F6;
      float: right;            
    }        
  }
  .text-box{
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    .field-name{
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #666666;      
    }
    .field-value{
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;     
    }
  }    
}
.img-box{
  display: inline-block;
  width: 48%;
  img{
    width: 100%;
  }
}
.button-box{
  padding: 16px;
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>