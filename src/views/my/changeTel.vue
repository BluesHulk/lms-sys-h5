<template>
<div id="change-tel">
  <van-nav-bar
    title="更换绑定手机"
    left-arrow
    @click-left="$router.push('/accountSafety')"
  />
  <div class="new-tel" v-if="nextFlg">
    <h1 class="text" style="margin-bottom: 48px;">请输入新手机号码</h1>
    <van-form @submit="onSubmit">
        <van-field
          v-model="tel"
          name="tel"
          :left-icon="require('@/assets/my/phone.png')" 
          label=""
          placeholder="请输入新手机号码"
          :rules="[{ pattern, message: '手机号格式不正确' }]"
        />
      <div class="button-box">
        <van-button block type="info" native-type="submit" :disabled="!pattern.test(tel)">下一步</van-button>
      </div>
    </van-form>      
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
      <van-button block type="info" @click="handleOk">完成</van-button>
    </div>    
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      tel: '',
      code: '',
      pattern: /^1[3-9]\d{9}$/,
      nextFlg: true,
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
      this.nextFlg = false
    },
    // 重新发送
    handleResend() {
      console.log('重新发送')
    },
    //完成
    handleOk() {
      console.log('完成', this.tel, this.code)
    }
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