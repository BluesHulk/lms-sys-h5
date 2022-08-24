<template>
  <div id="feedback">
    <van-nav-bar
      title="意见反馈"
      left-arrow
      @click-left="$router.push('/systemSet')"
    />    
    <div class="card">
      <h2 style="font-size: 16px; font-weight: 400; color: #333333;">
        <span style="font-size: 16px;font-weight: 400;color: #FF3B30;">*</span>
        反馈内容
      </h2>
      <van-divider 
      :hairline="false"
      :style="{ borderColor: '#ddd' }"
      />      
      <van-field
        v-model="message"
        rows="4"
        autosize
        type="textarea"
        maxlength="200"
        placeholder="请写下您的使用感受，我们将认真听取您的意见，努力提供更优质的服务。"
        show-word-limit
      />
    </div>
    <div class="card">
      <h2 style="font-size: 16px; font-weight: 400; color: #333333;">
        期待您留下联系方式我们将提供更好的服务
      </h2>
      <van-divider 
      :hairline="false"
      :style="{ borderColor: '#ddd' }"
      />      
      <van-field
        v-model="contact"
        rows="1"
        autosize
        type="textarea"
        placeholder="联系方式"
      />
    </div>
    <div class="card">
      <h2 style="font-size: 16px; font-weight: 400; color: #333333;">
        上传截图（最多六张）
      </h2>
      <van-divider 
      :hairline="false"
      :style="{ borderColor: '#ddd' }"
      />      
      <van-uploader 
        v-model="fileList"
        upload-text="添加图片" 
        multiple 
        :max-count="6"
      />
    </div>
    <div class="button-box">
      <van-button block type="info">提交</van-button>
    </div>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      contact: '',
      fileList: [],
    }
  }
}
</script>

<style lang="scss" scoped>
#feedback{
  height: 100%;
  width: 100%;
  overflow: auto;
}
.card{
  width: 96%;
  margin: 16px auto;
  border-radius: 8px;
  border: 1px solid #EEEEEE;
  padding: 16px;
}
.button-box{
  background-color: #fff;
  position: fixed;
  width: 100%;
  bottom: 16px;
  padding: 0 16px;
}
</style>