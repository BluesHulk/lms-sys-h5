<template>
  <div id="id-info">
    <van-nav-bar
      title="身份证信息"
      left-arrow
      @click-left="$router.push('/driverInfo')"
    />
    <div class="id-box" v-if="true">
      <div class="top-box"></div>
      <div class="middle-box">
        <div class="middle-content" v-if="nextFlg">
          <div class="mid-top-text">上传身份证照片</div>
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
                  <div class="upload-text">点击上传身份证正面</div>
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
                <div class="upload-text">点击上传身份证反面</div>
              </div>
            </van-uploader>
            </div>
          </div>
          <van-divider :style="{ borderColor: '#ddd' }" />
          <div class="middle-text">
            <p class="text-title">温馨提示：</p>
            <p class="text-text">1、请横向拍照，证件边缘与取景框对齐； </p>
            <p class="text-text">2、请确保身份证清晰、干净，拍摄时不要有阴影和反光；</p>
            <p class="text-text">3、请确保身份证信息没有被遮挡。</p>
          </div>
        </div>
        <div class="ocr-success" v-else>
          <div class="ocr-result">识别结果</div>
          <div class="instruction">请确认识别结果，若有误请点击编辑按钮修改</div>
          <div class="text-box" v-if="ocrResultFlg">
            <p class="ocr-text">
              <span class="field-name">证件号码：</span>
              <span class="field-value">{{ form.number }}</span>
              <span class="edit-area">
                <van-icon name="edit" @click="$router.push({path:'/editIdInfo',query:{record: form}})" />
                编辑
              </span>
            </p>
            <p class="ocr-text">
              <span class="field-name">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
              <span class="field-value">{{ form.name }}</span>  
            </p>
            <p class="ocr-text">
              <span class="field-name">有效期至：</span>
              <span class="field-value">{{ form.date }}</span>
            </p>
            <van-divider 
            dashed 
            :hairline="false"
            :style="{ borderColor: '#ddd' }"
            />
            <div class="hint-text">* 请确保以上信息正确无误</div>
          </div>
          <div class="fail-box" v-else>
            <h2 class="fail-title">部分识别失败</h2>
            <p class="fail-hint">请尝试重新识别或手动输入</p>
            <van-button type="info" size="mini" @click="$router.push('/editIdInfo')">
              手动输入
            </van-button>
          </div>
        </div>
      </div>
      <div class="bottom-box">
        <van-button 
          type="info" 
          block
          v-if="nextFlg"
          :disabled="disabledFlg"
          @click="handleNext"
        >
          下一步
        </van-button>
        <van-button 
          type="info" 
          block
          v-else
        >
          提交
        </van-button>
      </div>
    </div>
    <AfterUpload
    v-else
    />
    <IdInfoDialoag
      :visible.sync="visible"
      @close-dialog="visible = false"
     />
  </div>
</template>

<script>
import Vue from 'vue';
import IdInfoDialoag from './components/idInfoDialog.vue'
import AfterUpload from './components/afterUpload.vue'
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
    IdInfoDialoag,
    AfterUpload,
  },
  data() {
    return {
      fileList: [],
      idImgList: [],
      visible: false,
      disabledFlg: true,
      nextFlg: true,
      ocrResultFlg: false,
      form: {
        number: '410305199602254521',
        name: '刘莉莉',
        date: '2032-06-18',
      }
    }
  },
  mounted() {
    if(this.$route.query.type == 'edit'){
      this.visible = false
      this.nextFlg = false
      this.ocrResultFlg = true
    }else{
      this.visible = true
    }
  },
  methods: {
    closeDialog() {
      this.visible = false
    },
    // 上传身份证第一面后
    firstAfterRead() {
      if(this.idImgList.length && this.fileList.length){
        this.disabledFlg = false
      }
    },
    // 上传身份证第二面后
    secondAfterRead() {
      if(this.idImgList.length && this.fileList.length){
        this.disabledFlg = false
      }
    },
    // 删除图片
    handleDelete() {
      this.disabledFlg = true
    },
    // 下一步
    handleNext() {
      this.nextFlg = false
      this.ocrResultFlg = true //ocr识别结果 true 成功
    }
    
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
          margin-bottom: 16px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #333333;
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