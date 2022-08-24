<template>
  <div class="online">
    <div class="content">
      <div class="hasdata" v-if="itemInfo.orderNum && itemInfo">
        <div class="iconheader">
          <span @click="tapShow" class="iconfont icon-erweima"></span>
        </div>
        <div class="finish">
          <h3>装货已完成</h3>
          <p>完成时间：2022-04-12 15:30</p>
        </div>
        <!-- <div class="current_status">
          <p>当前状态：厂内排队</p>
          <h3>装料线：生产线1</h3>
          <div class="car_number">
            <div class="item">
              <span>623512</span>
              <span>前方车辆</span>
            </div>
            <div class="item">
              <span>623512</span>
              <span>您的排号</span>
            </div>
          </div>
          <div class="load_number">
            <div>
              <svg class="shalou svg-icon" aria-hidden="true">
                <use xlink:href="#icon-shalou"></use>
              </svg>
              <span>货物装载中</span>
            </div>
          </div>
        </div> -->
        <div class="finish_load">
          <van-cell class="cell-info" title="任务单号">THD26220012377</van-cell>
          <van-cell class="cell-info" title="配送物料">
            散装水泥 P.O42.4 20吨
          </van-cell>
          <van-cell class="cell-info" title="派单人">
            刘莉莉
          </van-cell>
          <van-cell class="cell-info" title="车辆信息">浙A50155</van-cell>
        </div>
        <!-- <div class="online_info">
          <van-cell class="cell-info" title="装货地址">
            泾阳声威集团有限公司
          </van-cell>
          <van-cell class="cell-info" title="配送物料">
            散装水泥 P.O42.4 20吨
          </van-cell>
          <van-cell class="cell-info" title="车辆信息">浙A50155</van-cell>
          <van-cell class="cell-info" title="任务单号">THD26220012377</van-cell>
          <van-cell class="cell-info" title="派单时间">
            2022-04-18 16:34
          </van-cell>
          <van-cell class="cell-info" title="送货时间">
            2022-04-12至2022-04-15
          </van-cell>
          <van-cell class="cell-info" title="派单人">

            <i
              class="iconfont icon-boda boda"
              @click="callPhone('15711196190')"
            ></i>
            <span>刘莉莉</span>
          </van-cell>
          <van-cell class="cell-info" title="客户">李忠来</van-cell>
        </div> -->
        <div class="arrive_at">
          <div class="victory">
            <img src="../../common/image/online/xiangxia@2x.png" alt="" />
            <span>
              接下来请到达卸货地 凭二维码进厂
            </span>
          </div>
        </div>

        <div class="unload_place">
          <p>
            <img src="../../common/image/task/unload.png" />
            <span>
              <i class="iconfont icon-daohang"></i>
              导航
            </span>
          </p>
          <h4>泾阳声威集团有限公司</h4>
          <p>
            <span>任务单号：</span>
            <span>THD26220012377</span>
          </p>
          <p>
            <span>卸货时间：</span>
            <span>
              {{ formateLoadTime(itemInfo.billDate) }} 至
              {{ formateLoadTime(itemInfo.billDate) }}
            </span>
          </p>
        </div>
      </div>
      <div class="nodata" v-else>
        <!-- <img :src="src" alt=""> -->
        <van-empty
          class="custom-image"
          :image="noneImg"
          description="当前无进行中的任务单～"
        />
      </div>
    </div>
    <iItab
      :tabList="tabList"
      @tab-click="tabClick"
      :initSelect="tabIndex"
    ></iItab>
    <van-popup v-model="show">
      <p class="pop-code"><img :src="src" alt="" /></p>
    </van-popup>
    <i @click="hidePop" v-if="show" class="iconfont icon-roundclose"></i>
  </div>
</template>

<script>
import iItab from '../../components/tab/index.vue'
import constant from '../../common/js/constant'
import QRCode from 'qrcode'
import moment from 'moment'
export default {
  name: 'Online',
  data() {
    return {
      tabList: constant.recommendTabs,
      tabIndex: 3,
      noneImg: require('../../common/image/no-data.png'),
      itemInfo: {
        billDate: 1660215791114,
        businessDept: 'string',
        createUser: 0,
        customerId: 0,
        customerName: 'string',
        deductCustomerId: 0,
        deductCustomerName: 'string',
        deptId: 0,
        dpOrderNum: 'string',
        driverName: 'string',
        driverOrderGoodsVos: [
          {
            adjustPriceId: 0,
            adjustPriceNum: 'string',
            amount: 0,
            amountUnitId: 'string',
            amountUnitName: 'string',
            contractGoodsId: 0,
            contractId: 0,
            contractNum: 'string',
            createTime: 1660215791114,
            createUser: 0,
            dispatchAmount: 0,
            executedAmount: 0,
            frozenPrice: 0,
            invoiceAmount: 0,
            invoicePrice: 0,
            modelMaterial: 'string',
            needDeptId: 0,
            needDeptName: 'string',
            oldOrderGoodsId: 0,
            oldOrderId: 0,
            oldOrderNum: 'string',
            orderNum: 'string',
            outPrice: 0,
            priceOrderId: 0,
            priceOrderNum: 'string',
            productCode: 'string',
            productId: 0,
            productName: 'string',
            remark: 'string',
            settledAmount: 0,
            settledPrice: 0,
            specification: 'string',
            takeAmount: 0,
            taxPrice: 0,
            taxRate: 0,
            unsettledAmount: 0,
          },
        ],
        driverPhone: 'string',
        flowControlResults: 'string',
        invoiceCustomerId: 0,
        invoiceCustomerName: 'string',
        jobId: 0,
        licensePlate: 'string',
        orderNum: 'string',
        orderType: 0,
        pickingStatus: 0,
        remark: 'string',
        salesCompanyId: 0,
        salesCompanyName: 'string',
        salesType: 0,
        salesman: 'string',
        settlementRule: 0,
        settlementStatus: 0,
        settlementType: 0,
        status: 0,
        tenantId: 0,
        thirdNum: 'string',
        transportStatus: 0,
        transportType: 0,
        updateUser: 0,
        waybillNum: '121213131312',
        weighNo: '1212131313122222',
      },
      id: '1231232324234234234',
      src: '',
      show: false,
    }
  },
  components: {
    iItab,
  },
  mounted() {
    QRCode.toDataURL(this.id, {
      //这个this.url就是你扫码后要跳转的地址
      version: 7, //版本号
      errorCorrectionLevel: 'Q', //容错率,(建议选较低)更高的级别可以识别更模糊的二维码，但会降低二维码的容量
      width: 280, //设置二维码图片大小
      height: 280,
    })
      .then((url) => {
        //console.log(url); //这个url是二维码生成地址，也就是相当于图片地址
        this.src = url //赋值给变量。用在img的src属性上
      })
      .catch((err) => {
        console.error(err)
      })
  },
  methods: {
    formateLoadTime(time) {
      return moment(time).format('YYYY-MM-DD ')
    },
    hidePop() {
      this.show = false
    },
    tapShow() {
      this.show = true
    },
    tabClick(tabIndex) {
      this.tabIndex = tabIndex
    },
    callPhone(phoneNumber) {
      window.location.href = 'tel://' + phoneNumber
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped scoped lang="scss">
.online {
  display: -webkit-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  .pop-code {
    width: 3rem;
    height: 2.86rem;
    background: linear-gradient(
      225deg,
      #e5f7ff 0%,
      #ffffff 36%,
      #ffffff 76%,
      #e0fff8 100%
    );
    border-radius: 8px;
    text-align: center;
    img {
      width: 1.67rem;
      height: 1.7rem;
      display: inline-block;
      margin-top: 0.55rem;
    }
  }
  .icon-roundclose {
    position: absolute;
    bottom: 1.5rem;
    font-size: 26px;
    color: #fff;
    z-index: 999999;
    left: 50%;
    margin-left: -0.13rem;
  }
}
.content {
  width: 100%;
  height: 100%;

  overflow: scroll;
  background-color: #f9faff;

  .hasdata {
    padding: 0.16rem;
    background-image: url('../../common/image/online/bg.png');
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100% 2.54rem;
    .iconheader {
      width: 100%;
      padding: 0.1rem 0;
      height: 0.54rem;

      span {
        color: #fff;
        font-size: 0.24rem;
        float: right;
      }
    }
    .finish {
      h3 {
        font-size: 0.24rem;
        font-weight: 600;
        color: #ffffff;
        padding-bottom: 0.1rem;
      }
      p {
        font-size: 0.14rem;
        color: #ffffff;
      }
    }
    .current_status {
      background: #ffffff;
      box-shadow: 0px 2px 8px 0px rgba(6, 19, 35, 0.1);
      margin-top: 0.42rem;
      padding-bottom: 0.2rem;
      p {
        font-size: 0.18rem;
        text-align: center;
        font-weight: 600;
        color: #666666;
        border-bottom: 1px solid #eee;
        padding: 0.16rem 0;
      }
      h3 {
        font-size: 0.24rem;
        text-align: center;
        font-weight: 600;
        color: #333333;
        padding: 0.16rem 0;
      }
      .car_number {
        width: 100%;
        display: flex;
        .item {
          flex: 1;
          border-right: 1px solid #eee;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          text-align: center;
          span {
            display: inline-block;
            flex: 1;
          }
        }
        .item:nth-of-type(1) {
          span:nth-of-type(1) {
            font-size: 0.36rem;
            font-weight: bold;
            color: #feac49;
            padding: 0.06rem 0;
          }
          span:nth-of-type(2) {
            font-size: 0.16rem;
            font-weight: bold;
            color: #333333;
            padding: 0.06rem 0;
          }
        }
        .item:nth-of-type(2) {
          border-right: none;
          span:nth-of-type(1) {
            font-size: 0.36rem;
            font-weight: bold;
            color: #00c386;
            padding: 0.06rem 0;
          }
          span:nth-of-type(2) {
            font-size: 0.16rem;
            font-weight: bold;
            color: #333333;
            padding: 0.06rem 0;
          }
        }
      }
      .load_number {
        div {
          width: 100%;
          text-align: center;
          font-size: 0.24rem;
          font-weight: 600;
          color: #4276f6;
          .shalou {
            width: 0.22rem;
            height: 0.2rem;
          }
        }
      }
    }
    .finish_load {
      background: #ffffff;
      box-shadow: 0px 2px 8px 0px rgba(6, 19, 35, 0.1);
      margin-top: 0.22rem;
      padding-bottom: 0.1rem;
      .cell-info {
        .van-cell__title {
          flex: none;
          width: 0.64rem;
          font-size: 0.16rem;
        }
        .van-cell__value {
          font-size: 0.16rem;
          font-weight: 400;
          color: #333333;
        }
      }
      .cell-info::after {
        border-bottom: none;
      }
    }
    .online_info {
      position: relative;
      margin-top: 0.1rem;
      border-radius: 8px;
      .cell-info {
        .van-cell__title {
          flex: none;
          width: 0.64rem;
          font-size: 0.16rem;
        }
        .van-cell__value {
          font-size: 0.16rem;
          font-weight: 400;
          color: #333333;
        }
      }
      .cell-info::after {
        border-bottom: none;
      }
      .boda {
        width: 0.16rem;
        height: 0.16rem;
        margin-top: 0.04rem;
        color: #4276f6;
      }
    }
    .arrive_at {
      background: #ffffff;
      padding: 0.16rem;
      margin-top: 0.1rem;
      .victory {
        height: 0.9rem;
        background: #f3f6fe;
        border-radius: 4px;
        text-align: center;

        img {
          display: inline-block;
          width: 0.16rem;
          height: 0.16rem;
          margin-top: 0.28rem;
        }
        span {
          font-size: 0.18rem;
          font-weight: 600;
          color: #333333;
          display: inline-block;
          width: 1.6rem;
          line-height: 0.22rem;
          margin-top: 0.25rem;
        }
      }
    }
    .unload_place {
      padding: 0.16rem;
      border-radius: 4px;
      margin-top: 0.16rem;
      margin-bottom: 0.2rem;
      position: relative;
      background: #fff;
      p {
        background: #f3f6fe;
      }

      p:nth-of-type(1) {
        position: relative;
        width: 100%;
        height: 0.3rem;
        img {
          position: absolute;
          width: 0.82rem;
          height: 0.24rem;
          display: inline-block;
          left: 0.1rem;
          top: -0.04rem;
        }
        span {
          float: right;
          color: #4276f6;
          margin-top: 0.12rem;
          margin-right: 0.1rem;
          font-size: 0.14rem;
        }
      }
      h4 {
        font-size: 0.16rem;
        font-weight: 600;
        color: #333333;
        padding: 0.1rem 0 0.05rem 0;
        background: #f3f6fe;

        padding: 0.1rem 0.1rem 0.05rem 0.1rem;
      }
      p:nth-of-type(2) {
        padding: 0.05rem 0.1rem;
        span:nth-of-type(1) {
          width: 0.75rem;
          display: inline-block;
          font-size: 0.14rem;
          color: #666666;
        }
        span:nth-of-type(1) {
          font-size: 0.14rem;
          color: #333333;
        }
      }
      p:nth-of-type(3) {
        padding: 0.05rem 0.1rem 0.1rem 0.1rem;
        span:nth-of-type(1) {
          width: 0.75rem;
          display: inline-block;
          font-size: 0.14rem;
          color: #666666;
        }
        span:nth-of-type(2) {
          font-size: 0.14rem;
          color: #333333;
        }
      }
    }
  }
  .nodata {
    width: 100%;
    margin-top: 1.3rem;
  }
}
</style>
