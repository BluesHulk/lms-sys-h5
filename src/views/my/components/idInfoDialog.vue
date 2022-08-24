<template>
  <div id="id-info-dialog">
    <van-dialog 
      v-model="visible" 
      :show-confirm-button="false"
    >
      <van-nav-bar title="上传示例">
        <template #right>
          <van-icon name="cross" @click="handleCancel" />
        </template>
      </van-nav-bar>
      <div style="text-align: center; padding: 16px;">
        <img src="@/assets/my/biaozhun.png" alt="">
        <div style="margin-top: 12px;">
          <img src="@/assets/my/check.png" alt="">
          标准样式
        </div>
        <img style="margin-top: 12px;" src="@/assets/my/wrong.png" alt="">
        <div style="text-align: left; margin-top: 12px;">
          <img src="@/assets/my/zhongdian.png" alt="">
          请保持拍摄物居中且完整展示
        </div>
        <div style="text-align: left; margin-top: 12px;">
          <img src="@/assets/my/zhongdian.png" alt="">
          请保持图片清晰不模糊
        </div>
        <van-button style="margin-top: 12px;" type="info" block @click="handleOk">好的，了解</van-button>
        <div style="margin-top: 12px; display: inline-block;" >
        <van-radio-group v-model="radio" @change="handleChange">
          <van-radio name="1" @click="handleValue">下次不再提醒</van-radio>
        </van-radio-group>
        </div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
export default {
    name: 'IdInfoDialoag',
    props:{
      visible:{
        type: Boolean,
        default: false,
      }
    },
  data() {
    return {
      radio: '0',
      radioChange: false,      
    }
  },
  methods: {
    // 关闭上传示例弹窗
    handleCancel(){
      this.$emit('close-dialog')
    },
    // 下次不再提醒
    handleValue(){
      if(this.radioChange){
        this.radio = '0'
      }
      this.radioChange = true
    },
    // 单选按钮值变化触发
    handleChange(){
      this.radioChange = false
    },
    // 点击好的，了解
    handleOk(){
      this.$emit('close-dialog')
    },
  }
}
</script>

<style>

</style>