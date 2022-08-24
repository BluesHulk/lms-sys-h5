<template>
  <div id="after-upload">
    <div v-if="notice" class="notice-box" :class="status == 2 ? 'danger-box' : 'warning-box'">
      <img v-if="status == 2" src="@/assets/my/jinggao.png" alt="">
      <img v-else src="@/assets/my/warning.png" alt="">
      <p>驳回原因：身份证照片模糊不清</p>
    </div>
    <div class="current-state">
      <img v-if="status == 0" src="@/assets/my/shenhezhong.png" alt="">
      <img v-else-if="status == 2" src="@/assets/my/weitongguo.png" alt="">
      <img v-else-if="status == 3" src="@/assets/my/yiguoqi.png" alt="">
      <img v-else src="@/assets/my/tongguo.png" alt="">
    </div>
    <div v-if="status == 0" class="state-text">
      <h2 class="current-text">审核中</h2>
      <p class="current-hint">从业资格证审核中，请耐心等待</p>
    </div>
    <div v-else-if="status == 2" class="state-text">
      <h2 class="current-text">审核未通过</h2>
      <p class="current-hint">审核未通过，请重新提交</p>
    </div>
    <div v-else-if="status == 3" class="state-text">
      <h2 class="current-text">已过期</h2>
      <p class="current-hint">您的从业资格信息已过期</p>
    </div>
    <div v-else class="state-text">
      <h2 class="current-text">审核通过</h2>
      <p class="current-hint">您的从业资格已通过审核</p>
    </div>
    <div class="id-info">
      <p class="id-text">
        从业资格信息
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
      <div class="img-box" style="margin-right:4px;">
        <img src="@/assets/my/idBack.png" alt="">
      </div>
      <div class="img-box">
        <img src="@/assets/my/idFront.png" alt="">
      </div>            
    </div>
    <div class="button-box">
      <van-button 
        type="info" 
        block
        @click="handleSubmit"
      >
        重新提交
      </van-button>         
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Divider, Button, Dialog } from 'vant';

Vue.use(Divider);
Vue.use(Button);

export default {
  name:'AfterCertificateUpload',
  data() {
    return {
      form: {
        number: '410305199602254521',
        name: '刘莉莉',
        date: '2032-06-18',
      },
      status: 3,
      notice: '',      
    }
  },
  methods: {
    handleSubmit() {
      Dialog.confirm({
        title: '温馨提示',
        message: '请确保知晓退回原因并已完成修改',
        confirmButtonColor: '#4276F6'
      }).then(() => {
          // on confirm 提交成功后返回司机信息页面
          this.$router.push('/driverInfo')
        }).catch(() => {
          // on cancel
        });
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
  height: 25%;
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
  margin: 0 auto;
  padding: 16px;
  box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.1000);
  border-radius: 4px;
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