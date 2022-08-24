<template>
<div id="change-tel">
  <van-nav-bar
    title="更换绑定手机"
    left-arrow
    @click-left="$router.push('/accountSafety')"
  />
  <div class="new-tel" v-if="nextFlg">
    <h1 class="text">手机号码验证</h1>
    <p class="hint">我们需要对您的手机号码进行验证</p>
    <van-field
      v-model="tel"
      name="tel"
      disabled
      :left-icon="require('@/assets/my/phone.png')" 
      label=""
    />
    <div class="button-box">
      <van-button block type="info" @click="handleNext">
        <span>获取短信验证码</span>
      </van-button>
    </div>  
  </div>
  <div class="new-tel" v-else>
    <h1 class="text">请输入验证码</h1>
    <p class="hint">验证码已发送至{{ tel }}</p>
    <van-field
      v-model="code"
      name="code"
      label=""
      :left-icon="require('@/assets/my/code.png')" 
      placeholder="请输入验证码"
    >
      <template #button>
        <span @click="handleResend">
          重新发送
        </span>
      </template>      
    </van-field>
    <div class="button-box">
      <van-button block type="info" @click="handleOk" :disabled="resendFlg">
        <van-count-down :time="time" ref="countDown" @finish="finish">
          <template #default="timeData">
            <span style="color: #fff;">重新获取</span>
            <span style="color: #fff;" v-if="resendFlg">{{ timeData.seconds }}&nbsp;s</span>
          </template>
        </van-count-down>
      </van-button>
      <!-- <van-button block type="info" @click="handleOk" v-else>
        下一步
      </van-button> -->
    </div>    
  </div>
  <div class="new-tel">
    <h1 class="text">重设密码</h1>
    <p class="hint">密码格式为6-16位字母和数字组合</p>
    <van-field
      v-model="password"
      type="password"
      name="password"
      :left-icon="require('@/assets/my/password.png')" 
      label=""
    />
    <div class="button-box">
      <van-button block type="info" @click="handleNext">
        提交
      </van-button>
    </div>  
  </div>  
</div>
</template>

<script>
import Vue from 'vue';
import { CountDown } from 'vant';

Vue.use(CountDown);
export default {
  data() {
    return {
      tel: '',
      code: '',
      password: '',
      pattern: /^1[3-9]\d{9}$/,
      nextFlg: true,
      resendFlg: true,
      time: 60*1000,
    }
  },
  methods: {
    handleNext() {
      this.nextFlg = false
    },
    // 重新发送
    handleResend() {
      console.log('重新发送')
    },
    //完成
    handleOk() {
      console.log('完成', this.tel, this.code)
      this.resendFlg = true
      this.$refs.countDown.reset();
    },
    // 重新获取倒计时
    finish() {
      this.resendFlg = false
    },
  },
}
</script>

<style lang="scss" scoped>
.new-tel{
  padding: 32px 24px;
  .text{
    font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #333333;
  }
  .hint{
    margin: 12px 0 16px 0;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #666666;    
  }
  .button-box{
    margin-top: 24px;
  }
}
</style>