<template>
  <div id="system-set">
    <van-nav-bar
      title="设置"
      left-arrow
      @click-left="$router.push('/my')"
    />
    <div style="margin-top: 16px; padding: 0 16px;">
      <van-cell-group>
        <van-cell 
          title="账户与安全" 
          :icon="require('@/assets/my/shenfenzheng.png')" 
          title-style="font-size: 16px;"
          @click="$router.push('/accountSafety')"
          is-link />
        <van-cell 
          title="帮助与反馈" 
          :icon="require('@/assets/my/jiashizheng.png')" 
          title-style="font-size: 16px;"
          @click="$router.push('/feedback')"
          is-link />
        <van-cell 
          title="关于我们" 
          :icon="require('@/assets/my/shenfenzheng.png')" 
          title-style="font-size: 16px;"
          @click="$router.push('/aboutUs')"
          is-link />
      </van-cell-group>    
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#system-set{
  width: 100%;
  height: 100%;
  background-color: #F9FAFF;
}
</style>
