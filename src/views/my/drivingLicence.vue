<template>
  <div id="id-info">
    <van-nav-bar
      title="行驶证信息"
      left-arrow
      @click-left="$router.push('/carInfo')"
    />
    <div class="id-box" v-if="editFlg">
      <div class="top-box"></div>
      <div class="middle-box">
        <div class="middle-content">
          <div class="mid-top-text">上传行驶证照片</div>
          <div class="id-img">
            <div>
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
          </div>
        </div>
        <div class="before-ocr" v-if="false">
          <div class="content-box">
            <h2 class="ocr-area">OCR识别区</h2>
            <p class="ocr-hint">请上传磅单照片进行识别</p>
          </div>
        </div>
        <div class="ocr-success" v-else>
          <!-- <div class="ocr-result">识别结果</div>
          <div class="instruction">请确认识别结果，若有误请点击编辑按钮修改</div> -->
          <div class="text-box" v-if="ocrResultFlg">
            <p class="ocr-text">
              <span class="field-name">车牌号码：</span>
              <span class="field-value">{{ form.number }}</span>
              <span class="edit-area">
                <van-icon name="edit" @click="$router.push({path:'/editDrivingLicence',query:{record: form}})" />
                编辑
              </span>
            </p>
            <p class="ocr-text">
              <span class="field-name">所&nbsp;&nbsp;有&nbsp;人：</span>
              <span class="field-value">{{ form.name }}</span>  
            </p>
            <p class="ocr-text">
              <span class="field-name">车辆类型：</span>
              <span class="field-value">{{ form.carType }}</span>
            </p>
            <p class="ocr-text">
              <span class="field-name">识别代号：</span>
              <span class="field-value">{{ form.code }}</span>
            </p>
            <p class="ocr-text">
              <span class="field-name">发动机号：</span>
              <span class="field-value">{{ form.engineCode }}</span>
            </p>
            <p class="ocr-text">
              <span class="field-name">整备质量：</span>
              <span class="field-value">{{ form.load }}</span>
            </p>
            <p class="ocr-text">
              <span class="field-name">核载质量：</span>
              <span class="field-value">{{ form.quality }}</span>
            </p>
            <p class="ocr-text">
              <span class="field-name">外廓尺寸：</span>
              <span class="field-value">{{ form.size }}</span>
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
            <van-button type="info" size="mini" @click="$router.push('/editDrivingLicence')">
              手动输入
            </van-button>
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
    <IdInfoDialoag
      :visible.sync="visible"
      @close-dialog="visible = false"
     />
  </div>
</template>

<script>
import IdInfoDialoag from './components/idInfoDialog'
import AfterUpload from './components/drivingLicenceUpload'

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
      editFlg: false,
      ocrResultFlg: false,
      form: {
        number: '浙A05124',
        name: '刘莉莉',
        date: '2032-06-18',
        carType: '重型普通货车',
        code: 'LJSDR9CEIF3215088',
        engineCode: 'E43JIF03788',
        load: '9600 kg',
        quality: '7000 kg',
        size: '8980 X 2456 X 5200 mm',
      }
    }
  },
  mounted() {
    if(this.$route.query.type == 'edit'){
      this.visible = false
    }else{
      // this.editFlg = true
      this.visible = true
    }
  },
  methods: {
    // 上传驾驶证第一面后
    firstAfterRead() {
      if(this.idImgList.length && this.fileList.length){
        this.disabledFlg = false
      }
    },
    // 上传驾驶证第二面后
    secondAfterRead() {
      if(this.idImgList.length && this.fileList.length){
        this.disabledFlg = false
      }
    },
    // 删除图片
    handleDelete() {
      this.disabledFlg = true
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
      height: 48%;
      width: 92%;
      background-color: #fff;
      margin-top: -140px;
      border-radius: 16px;
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
  }
  .before-ocr{
    height: 40%;
    width: 92%;
    background-color: #fff;
    margin-top: 16px;
    border-radius: 16px;
    padding: 16px;
    .content-box{
      height: 100%;
      width: 100%;
      background-color:#F3F6FE;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .ocr-area{
        font-size: 18px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #333333;
        margin-bottom: 12px;
      }
      .ocr-hint{
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
      }
    }    
  }
  .ocr-success{
    height: 48%;
    width: 92%;
    background-color: #fff;
    margin-top: 16px;
    border-radius: 16px;
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
  .bottom-box{
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    padding:16px 8px;
  }
}
</style>