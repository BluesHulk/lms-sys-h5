<template>
  <div id="id-info">
    <van-nav-bar
      title="道路运输证信息"
      left-arrow
      @click-left="$router.push('/carInfo')"
    />
    <div class="id-box" v-if="editFlg">
      <div class="top-box"></div>
      <div class="middle-box">
        <div class="middle-content">
          <div class="mid-top-text">上传道路运输证照片</div>
          <div class="id-img">
            <div style="margin-bottom: 16px;">
              <van-uploader
                v-model="fileList"
                image-fit="contain"
                :preview-size="130"
                :after-read="firstAfterRead"
                @delete="handleDelete"
                :show-upload="!fileList.length"
              >
                <div class="id-back">
                  <img src="@/assets/my/imgUpload.png" style="vertical-align: middle;" alt="">
                  <div class="upload-text">点击上传照片</div>
                </div>
              </van-uploader>
            </div>
            <!-- <div>
            <van-uploader
              v-model="idImgList"
              imageFit="contain"
              :preview-size="130"
              :after-read="secondAfterRead"
               @delete="handleDelete"
              :show-upload="!idImgList.length"
            >
              <div class="id-back id-front">
                <img src="@/assets/my/imgUpload.png" style="vertical-align: middle;" alt="">
                <div class="upload-text">点击上传照片</div>
              </div>
            </van-uploader>
            </div> -->
          </div>
        </div>
      </div>
      <div class="bottom-box">
        <van-button 
          type="info" 
          block
        >
          提交
        </van-button>
      </div>
    </div>
    <AfterUpload
    v-else
    @change-info="editFlg = true"
    />
  </div>
</template>

<script>
import AfterUpload from './components/transportLicenceUpload.vue'
import { Dialog } from 'vant';

export default {
  components: {
    AfterUpload,
  },
  data() {
    return {
      fileList: [],
      idImgList: [],
      editFlg: false,
      form: {
        number: '410305199602254521',
        name: '刘莉莉',
        date: '2032-06-18',
      }
    }
  },
  mounted() {
    if(this.$route.query.type == 'edit'){
    }else{
    }
  },
  methods: {
    // 上传身份证第一面后
    firstAfterRead() {
    },
    // 上传身份证第二面后
    secondAfterRead() {
    },
    // 删除图片
    handleDelete() {
    },
    
  }
}
</script>

<style lang="scss" scoped>
#id-info{
  width: 100%;
  height: 100%;
}
.id-box{
    width: 100%;
    height: 100%;
    // position: relative;
    .top-box{
      height: 24%;
      background-color: #4276F6;

    }
    .middle-box{
      height: 62%;
      background-color: #F9FAFF;
      display: flex;
      flex-direction: column;
      align-items: center;
      .middle-content{
        width: 92%;
        background-color: #fff;
        margin-top: -140px;
        border-radius: 16px 16px 0 0;
        padding: 16px;
        text-align: center;
        .mid-top-text{
          font-size: 18px;
          margin-bottom: 12px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #333333;
        }
        .id-img{
          display: flex;
          flex-direction: column;
          align-items: center;
          .id-back{
            height: 130px;
            width: 226px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background: url('~@/assets/my/idBack.png');
            .upload-text{
              font-size: 14px;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              color: #4276F6;
            }
          }
          .id-front{
            background: url('~@/assets/my/idFront.png');
          }
        }
        .middle-text{
          text-align: left;
          .text-title{
            font-size: 16px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #FEAC49;
            margin-bottom: 16px;
          }
          .text-text{
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #333333;
            margin-bottom: 8px;
          }
        }
      }
    }
    .bottom-box{
      position: fixed;
      bottom: 0;
      width: 100%;
      background-color: #fff;
      padding:16px 8px;
    }
}
</style>