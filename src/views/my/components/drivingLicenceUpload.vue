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
        行驶证信息
        <span class="edit-area">
          <van-icon name="edit" @click="$router.push({path:'/editDrivingLicence',query:{record: form}})" />
          修改
        </span>
      </p>
      <van-divider 
      dashed 
      :hairline="false"
      :style="{ borderColor: '#ddd' }"
      />
        <p class="text-box">
          <span class="field-name">车牌号码：</span>
          <span class="field-value">{{ form.number }}</span>
        </p>
        <p class="text-box">
          <span class="field-name">所&nbsp;&nbsp;有&nbsp;人：</span>
          <span class="field-value">{{ form.name }}</span>  
        </p>
        <p class="text-box">
          <span class="field-name">车辆类型：</span>
          <span class="field-value">{{ form.carType }}</span>
        </p>
        <p class="text-box">
          <span class="field-name">使用性质：</span>
          <span class="field-value">{{ form.useNature }}</span>
        </p>
        <p class="text-box">
          <span class="field-name">品牌型号：</span>
          <span class="field-value">{{ form.brand }}</span>
        </p>
        <p class="text-box">
          <span class="field-name">识别代号：</span>
          <span class="field-value">{{ form.code }}</span>
        </p>
        <p class="text-box">
          <span class="field-name">发动机号：</span>
          <span class="field-value">{{ form.engineCode }}</span>
        </p>
        <p class="text-box">
          <span class="field-name">核定载人数：</span>
          <span class="field-value">{{ form.takeNumber }}</span>
        </p>
        <p class="text-box">
          <span class="field-name">总质量：</span>
          <span class="field-value">{{ form.load }}</span>
        </p>
        <p class="text-box">
          <span class="field-name">核载质量：</span>
          <span class="field-value">{{ form.quality }}</span>
        </p>
        <p class="text-box">
          <span class="field-name">外廓尺寸：</span>
          <span class="field-value">{{ form.size }}</span>
        </p>
        <p class="text-box">
          <span class="field-name">准牵引总质量(kg)：</span>
          <span class="field-value">{{ form.totalQuality }}</span>
        </p>
        <p class="text-box">
          <span class="field-name">注册日期：</span>
          <span class="field-value">{{ form.registerDate }}</span>
        </p>
        <p class="text-box">
          <span class="field-name">发证日期：</span>
          <span class="field-value">{{ form.licenceDate }}</span>
        </p>
        <p class="text-box">
          <span class="field-name">有效期至：</span>
          <span class="field-value">{{ form.date }}</span>
        </p>
        <div class="img-box">
          <img src="@/assets/my/idFront.png" alt="">
        </div>          
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
      form: {
        number: '浙A05124',
        name: '刘莉莉',
        date: '2032-06-18',
        registerDate: '2032-06-18',
        licenceDate: '2032-06-18',
        carType: '重型普通货车',
        code: 'LJSDR9CEIF3215088',
        engineCode: 'E43JIF03788',
        load: '9600 kg',
        quality: '7000 kg',
        totalQuality: '3400',
        size: '8980 X 2456 X 5200 mm',
        useNature: '非营运',
        brand: '特斯拉4522150',
        takeNumber: '5',
      },
      status: 3,
      statusObj: {
        1: '审核中',
        2: '未通过',
        3: '已完成',
        4: '已过期',
      },
      statusText: {
        1: '行驶证信息审核中，请耐心等待',
        2: '审核未通过，请重新提交',
        3: '您的行驶证信息已通过审核',
        4: '您的行驶证信息已过期',
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