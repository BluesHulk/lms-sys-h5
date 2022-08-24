<template>
  <div id="wait">
    <iIheader class="header"></iIheader>
    <h4>声威泾阳水泥厂</h4>
    <div class="pcode">
      <div class="pcode_child">
        <h3>装货任务</h3>
        <p><img :src="src" alt="" /></p>
        <h5>散装水泥 P.O42.4</h5>
        <h5>20吨</h5>
        <h5>浙A55D20</h5>
        <div class="wait_info">
        <div class="wait_info_item">
                  <van-cell class="cell-info" title="任务单号">THD26220012377</van-cell>
          <van-cell class="cell-info" title="派单时间">
            2022-04-18 16:34
          </van-cell>
          <van-cell class="cell-info" title="送货时间">
            2022-04-12至2022-04-15
          </van-cell>
          <van-cell class="cell-info" title="派单人">
            <!-- <van-icon name="search" class="search-icon" /> -->

            <i
              class="iconfont icon-boda boda"
              @click="callPhone('15711196190')"
            ></i>
            <span>刘莉莉</span>
          </van-cell>
          <van-cell class="cell-info" title="客户">李忠来</van-cell>
        </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iIScroll from '../../../components/scroll/index.vue'
import iIheader from '../../../components/header/index.vue'
import QRCode from 'qrcode'
export default {
  name: 'Wait',
  data() {
    return {
      id: '1231232324234234234',
      src: '',
    }
  },
  components: {
    iIScroll,
    iIheader,
  },
  watch: {},
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
    callPhone(phoneNumber) {
      window.location.href = 'tel://' + phoneNumber
    },
  },
}
</script>

<style scoped lang="scss">
#wait {
  width: 100%;
  height: 100%;
  background: #f9faff;
  overflow: scroll;
  background: url('../../../common/image/task/yundan@2xbg.png') no-repeat center
    center;
  background-size: 100% 100%;
  h4 {
    padding: 0 0.16rem;
    font-size: 0.24rem;
    font-weight: 600;
    color: #ffffff;
    margin: 0.24rem 0;
    text-align: center;
  }
  .pcode {
    width: 100%;
    padding: 0 0.16rem;
    .pcode_child {
      width: 100%;
      height: 5.59rem;
      background: url('../../../common/image/task/wait.png') no-repeat center
        center;
      background-size: 100% 100%;
      margin-bottom: .92rem;
      h3 {
        padding-top: 0.35rem;
        padding-bottom: 0.13rem;
        text-align: center;
        font-size: 0.18rem;
        font-weight: 600;
        color: #feac49;
      }
      p {
        padding: 0 0.16rem;
        text-align: center;
        padding-bottom: 0.2rem;
        img {
          width: 1.67rem;
          height: 1.7rem;
          display: inline-block;
        }
      }
      h5 {
        font-size: 0.24rem;
        text-align: center;
        padding-bottom: 0.1rem;
        font-weight: 600;
        color: #333333;
      }
      .wait_info {
        padding: 0 0.2rem;
        position: relative;
        margin-top: 0.1rem;
        .wait_info_item{
          border-top: 1px dashed #EEEEEE;
        }
        .cell-info {
          .van-cell__title {
            flex: none;
            width: 0.64rem;
            font-size: 0.14rem;
            color: #666666;
          }
          .van-cell__value {
            font-size: 0.14rem;
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
    }
  }
}
.header /deep/ .content .actions {
  color: #fff !important;
}
.header /deep/ .content .leftspan .logo {
  color: #fff !important;
}
</style>
