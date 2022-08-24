<template>
  <div id="system-set">
    <van-nav-bar
      title="关于我们"
      left-arrow
      @click-left="$router.push('/my')"
    />
    <div style="margin-top: 16px; padding: 0 16px;">
      <van-cell-group>
        <van-cell 
          title="用户协议" 
          title-style="font-size: 16px;"
          @click="$router.push('/my')"
          is-link />
        <van-cell 
          title="隐私政策" 
          title-style="font-size: 16px;"
          @click="$router.push('/my')"
          is-link />
        <van-cell 
          title="版本信息" 
          title-style="font-size: 16px;"
          value="V1.0"
        />
        <van-cell 
          title="微信公众号" 
          title-style="font-size: 16px;"
          value="来回科技" 
        />
        <van-cell 
          title="微信公众号" 
          title-style="font-size: 16px;"
          value="400-000-000" 
        />
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
