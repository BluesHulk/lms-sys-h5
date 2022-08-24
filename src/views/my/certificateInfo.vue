<template>
  <div id="id-info">
    <van-nav-bar
      title="从业资格证"
      left-arrow
      @click-left="$router.push('/driverInfo')"
    />
    <div class="id-box" v-if="editFlg">
      <div class="top-box"></div>
      <div class="middle-box">
        <div class="middle-content">
          <div class="mid-top-text">请上传从业资格证</div>
          <div class="mid-top-hint">图片大小10M以内，格式2支持jpg、png，最多可上传2张</div>
          <div class="id-img">
            <div style="overflow: hidden; height: 48%">
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
            <div style="overflow: hidden; height: 48%">
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
            </div>
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
import Vue from 'vue';
import AfterUpload from './components/afterCertificateInfo.vue'
import { 
  NavBar, 
  Button, 
  Divider, 
  Uploader, 
  Dialog, 
  Radio,
  RadioGroup
  } from 'vant';

// 全局注册
Vue.use(Dialog);
Vue.use(Uploader);
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Divider);
Vue.use(Radio);
Vue.use(RadioGroup);
export default {
  components: {
    AfterUpload,
  },
  data() {
    return {
      fileList: [],
      idImgList: [],
      editFlg: true,
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
        height: 100%;
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
        .mid-top-hint{
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          margin-bottom: 16px;          
        }
        .id-img{
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 65%;          
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
      .ocr-success{
        height: 100%;
        width: 92%;
        background-color: #fff;
        margin-top: -140px;
        border-radius: 16px 16px 0 0;
        padding: 16px;
        .ocr-result{
          font-size: 18px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #333333;
        }
        .instruction{
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
          margin: 8px 0;
        }
        .text-box{
          background: #F3F6FE;
          border-radius: 4px;
          padding: 12px;
          .ocr-text{
            margin-top: 8px;
          }
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
          .edit-area{
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #4276F6;
            float: right;            
          }
          .hint-text{
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FF3B30;          
          }
        }
        .fail-box{
          text-align: center;
          background: rgba(0,0,0,0.5000);
          border-radius: 4px;
          padding: 16px;
          .fail-title{
            font-size: 18px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #FFFFFF;
          }
          .fail-hint{
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            margin: 12px 0;
            color: #FFFFFF;            
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