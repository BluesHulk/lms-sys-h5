<template>
  <div id="system-set">
    <van-nav-bar
      title="账户与安全"
      left-arrow
      @click-left="$router.push('/systemSet')"
    />
    <div style="margin-top: 16px; padding: 0 16px;">
      <van-cell-group>
        <van-cell 
          title="手机号码" 
          value="138****5512" 
          title-style="font-size: 16px;"
          @click="handleTel"
          is-link />
        <van-cell 
          title="修改密码" 
          title-style="font-size: 16px;"
          @click="$router.push('/findPassword')"
          is-link />
      </van-cell-group>      
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  data() {
    return {

    }    
  },
  methods: {
    handleTel() {
      Dialog.confirm({
        title: '更换已绑定的手机号？',
        confirmButtonText: '更换',
        cancelButtonText: '取消',
        message: '当前绑定的手机号码为\n138****5521',
        confirmButtonColor: '#4276F6'
      }).then(() => {
          // on confirm 跳转至编辑车辆信息页面
          this.$router.push('/changeTel')
        }).catch(() => {
          // on cancel
        });      
    }
  },
}
</script>

<style lang="scss" scoped>
#system-set{
  width: 100%;
  height: 100%;
  background-color: #F9FAFF;
}
</style>
