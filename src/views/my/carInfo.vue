<template>
  <div id="id-info">
    <van-nav-bar
      title="车辆信息"
      left-arrow
      @click-left="$router.push('/carList')"
    />
    <div class="id-box">
      <div class="top-box"></div>
      <div class="middle-box">
        <div class="base-info">
          <p class="title-text">
            基础信息
            <span class="edit-area">
              <van-icon name="edit" @click="$router.push({path:'/editCarInfo',query:{record: form}})" />
              编辑
            </span>
          </p>
          <van-divider 
          dashed 
          :hairline="false"
          :style="{ borderColor: '#ddd' }"
          />
          <p class="text-box">
            <span class="field-name">车牌号码：</span>
            <span class="field-value">{{ form.number }}</span>
          </p>
          <p class="text-box">
            <span class="field-name">车轴类型：</span>
            <span class="field-value">{{ form.axleType }}</span>  
          </p>
          <p class="text-box">
            <span class="field-name">国标等级：</span>
            <span class="field-value">{{ form.letState }}</span>  
          </p>
          <p class="text-box">
            <span class="field-name">拉筋数量：</span>
            <span class="field-value">{{ form.tiepiece }}</span>
          </p>
          <p class="text-box">
            <span class="field-name">年检年份：</span>
            <span class="field-value">{{ form.checkYear }}</span>
          </p>
          <p class="text-box">
            <span class="field-name">使用ETC：</span>
            <span class="field-value">{{ form.useETC }}</span>
          </p>
          <p class="text-box">
            <span class="field-name">飞车翼：</span>
            <span class="field-value">{{ form.swift }}</span>
          </p>          
        </div>
        <div class="licence-info" v-if="false">
          <div class="licence-text">证件信息</div>
          <van-divider 
          dashed 
          :hairline="false"
          :style="{ borderColor: '#ddd' }"
          />          
          <div class="licence-box" @click="$router.push('/drivingLicence')">
            <img src="@/assets/my/headerImg.png" alt="">
            <div class="licence-content">
              <h2 class="licence-title">行驶证</h2>
              <p class="licence-hint">您的行驶证{{ textObj[status] }}</p>
              <span 
                class="licence-status"
                :class="bgColor[status]"
              >
                {{ statusObj[status] }}
              </span>
            </div>
          </div>
          <div class="licence-box" @click="$router.push('/transportLicence')">
            <img src="@/assets/my/headerImg.png" alt="">
            <div class="licence-content">
              <h2 class="licence-title">道路运输证</h2>
              <p class="licence-hint">您的道路运输证{{ textObj[state] }}</p>
              <span 
                class="licence-status"
                :class="bgColor[state]"
              >
               {{ statusObj[state] }}
              </span>
            </div>
          </div>
        </div>
        <div class="licence-info" v-else>
          <div class="licence-text">证件信息</div>
          <van-divider 
          dashed 
          :hairline="false"
          :style="{ borderColor: '#ddd' }"
          />           
          <div class="cant-view"></div>
          <div class="cant-view"></div>
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
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      form: {
        name: '123',
        number: '123',
        checkYear: '123',
        tiepiece: '123',
        letState: '123',
        axleType: '1233', 
        load: '123123',
        useETC: '3123',
        swift: '123123',
      },
      status: 0,
      state: 1,
      statusObj: {
        0: '待上传',
        1: '审核中',
        2: '未通过',
        3: '已完成'
      },
      bgColor: {
        0: 'before',
        1: 'checking',
        2: 'not-pass',
        3: 'done'
      },
      textObj:{
        0: '未上传，请尽快完善',
        1: '审核中，请耐心等待',
        2: '审核未通过',
        3: '已上传完成'
      }
    }
  },
  mounted() {
  },
  methods: {
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
      .base-info{
        width: 96%;
        margin: -160px auto 0;
        background-color: #fff;
        padding: 16px;
        box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.1000);
        border-radius: 4px;
        .title-text{
          font-size: 18px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #333333;
          .edit-area{
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #4276F6;
            float: right;            
          }        
        }
        .text-box{
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
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
        }    
      }
      .licence-info{
        width: 96%;
        margin: 16px auto 0;
        background-color: #fff;
        padding: 16px;
        box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.1000);
        border-radius: 4px;
        .licence-text{
          font-size: 18px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #333333;   
        }
        .licence-box{
          background: url('~@/assets/my/licenceBg.png');
          background-size: 100% 100%;
          height: 100px;
          margin-bottom: 8px;
          padding: 16px 0 16px 16px;
          display: flex;
          align-items: center;
          position: relative;
          .licence-content{
            margin-left: 16px;
            .licence-title{
              font-size: 20px;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              color: #FFFFFF;
              margin-bottom: 8px;              
            }
            .licence-hint{
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #FFFFFF;
              line-height: 20px;              
            }
            .licence-status{
              position: absolute;
              right: 0;
              top: 0;
              padding: 4px 16px;
              font-size: 14px;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              border-radius: 0px 0px 0px 18px;
              color: #FFFFFF;
            }
            .before{
              background: linear-gradient(134deg, #9D9CD6 0%, #8D8DC2 100%);
            }
            .checking{
              background: linear-gradient(92deg, #FFA62E 0%, #FF7300 100%);
            }
            .not-pass{
              background: linear-gradient(135deg, #FF6C4A 0%, #FF4343 100%);              
            }
            .done{
              background: linear-gradient(134deg, #49DFAF 0%, #23C6BA 100%);
            }
          }
        }
        .cant-view{
          background: url('~@/assets/my/cantView.png');
          background-size: 100% 100%;
          height: 100px;
          margin-bottom: 8px;
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