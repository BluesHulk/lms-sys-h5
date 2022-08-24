<template>
  <div id="done">
    <iIheader class="header"></iIheader>
    <div class="company_info">
      <div class="content">
        <p class="load">
          <img src="../../../common/image/task/load.png" alt="" />
        </p>
        <h4>泾阳声威集团有限公司</h4>
        <p class="adress">
          <span class="adress-lable">发货地址：</span>
          <span class="address-name">
            浙江省杭州市滨江区西兴街道锦绣国际大厦1603
          </span>
        </p>
      </div>
    </div>
    <div class="task_info">
      <span class="done">已完成</span>
      <h4>任务单信息</h4>
      <van-cell class="cell-info" title="货物信息">
        散装水泥 P.O42.4 20吨
      </van-cell>
      <van-cell class="cell-info" title="车辆信息">浙A50155</van-cell>
      <van-cell class="cell-info" title="派单人">
        <!-- <van-icon name="search" class="search-icon" /> -->

        <i
          class="iconfont icon-boda boda"
          @click="callPhone('15711196190')"
        ></i>
        <span>刘莉莉</span>
      </van-cell>
      <template v-if="show">
        <van-cell class="cell-info" title="客户">李忠来</van-cell>

        <van-cell class="cell-info" title="任务单号">THD26220012377</van-cell>
        <van-cell class="cell-info" title="要求时间">
          2022-04-12至2022-04-15
        </van-cell>
        <van-cell class="cell-info" title="派单时间">
          2022-04-18 16:34
        </van-cell>

        <van-cell class="cell-info" title="完成时间">
          2022-04-18 17:34
        </van-cell>
      </template>

      <div class="more">
        <p @click="tabMore">
          {{ show ? '收起' : '查看更多' }}
          <van-icon class="zhankai" :name="show ? 'arrow-up' : 'arrow-down'" />
        </p>
      </div>
    </div>

    <div class="waybill_info">
      <van-cell
        class="title_bill"
        title="运单信息"
        is-link
        value="YD200005451255"
      />
    </div>
    <div class="ticket_info">
      <van-cell class="ticket_bill" title="单据信息" />
      <p>点击图片可进行预览</p>
      <div class="preview">
        <div class="list">
          <span @click="showImgList('bd')">磅单</span>
          <span @click="showImgList('zjd')">质检单</span>
          <span @click="showImgList('hgz')">合格证</span>
        </div>
      </div>
    </div>
    <van-image-preview
      v-model="showImg"
      :images="imagesList"
      @change="onChange"
    >
      <template v-slot:index>第{{ index }}页</template>
    </van-image-preview>
  </div>
</template>

<script>
import iIScroll from '../../../components/scroll/index.vue'
import iIheader from '../../../components/header/index.vue'
export default {
  name: 'taskdetail',
  data() {
    return {
      show: false,
      showImg: false,
      index: 1,
      imagesList: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
    }
  },
  components: {
    iIScroll,
    iIheader,
  },
  watch: {},
  mounted() {
    console.log(this.$route)
  },
  created() {},
  methods: {
    onChange(index) {
      this.index = index + 1
    },
    showImgList(type) {
      if (type == 'bd') {
        this.imagesList = []
        if (this.imagesList.length > 0) {
          this.showImg = true
        } else {
          this.$toast.fail('暂无图片信息')
        }
      } else if (type == 'zjd') {
        this.imagesList = []
        if (this.imagesList.length > 0) {
          this.showImg = true
        } else {
          this.$toast.fail('暂无图片信息')
        }
      } else {
        this.imagesList = [
          'https://img01.yzcdn.cn/vant/apple-1.jpg',
          'https://img01.yzcdn.cn/vant/apple-2.jpg',
        ]
        if (this.imagesList.length > 0) {
          this.showImg = true
        } else {
          this.$toast.fail('暂无图片信息')
        }
      }
    },

    callPhone(phoneNumber) {
      window.location.href = 'tel://' + phoneNumber
    },
    tabMore() {
      this.show = !this.show
    },
  },
}
</script>

<style scoped lang="scss">
#done {
  width: 100%;
  height: 100%;
  background: #f9faff;
   overflow: scroll;
  .header{
    background: #fff;
  }
  .company_info {
    padding: 0.16rem;
    background: #fff;
    .content {
      background: #f3f6fe;
      border-radius: 8px;
      margin-top: 0.2rem;
      .load {
        position: relative;
        width: 100%;
        height: 0.3rem;
        padding: 0 0.1rem;
        img {
          position: absolute;
          width: 0.82rem;
          height: 0.24rem;
          display: inline-block;
          left: 0.1rem;
          top: -0.04rem;
        }
      }
      h4 {
        padding: 0.1rem;
        font-size: 0.16rem;
        font-weight: 600;
        color: #333333;
      }
      .adress {
        padding: 0 0.1rem;
        display: flex;
        padding-bottom: 0.06rem;
        .adress-lable {
          width: 0.7rem;
          font-size: 0.14rem;
          color: #666666;
        }
        .address-name {
          flex: 1;
          font-size: 0.14rem;
          font-weight: 400;
          color: #333333;
          line-height: 0.16rem;
        }
      }
    }
  }
  .task_info {
    position: relative;
    margin-top: 0.1rem;
    .done {
      position: absolute;
      right: 0;
      top: 0;
      width: 0.74rem;
      height: 0.25rem;
      background: linear-gradient(134deg, #49dfaf 0%, #23c6ba 100%);
      border-radius: 0px 0px 0px 0.18rem;
      text-align: center;
      color: #fff;
      line-height: 0.25rem;
    }
    .failed {
      position: absolute;
      right: 0;
      top: 0;
      width: 0.74rem;
      height: 0.25rem;
      background: linear-gradient(134deg, #9d9cd6 0%, #8d8dc2 100%);
      border-radius: 0px 0px 0px 0.18rem;
      text-align: center;
      color: #fff;
      line-height: 0.25rem;
    }
    .more {
      padding: 0 0.16rem;
      background: #fff;

      p {
        text-align: center;
        height: 0.39rem;
        line-height: 0.39rem;
        color: #999999;
        font-size: 0.14rem;
        border-top: 1px dashed #ccc;
        .zhankai {
          font-size: 0.14rem;
        }
      }
    }
    h4 {
      padding: 0.1rem 0.16rem;
      font-size: 0.18rem;
      font-weight: 600;
      color: #333333;
      background: #fff;
    }
    .cell-info {
      .van-cell__title {
        flex: none;
        width: 0.64rem;
        font-size: 0.16rem;
        color: #666666;
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
  .waybill_info {
    margin-top: 0.1rem;
    .title_bill {
      .van-cell__title {
        font-size: 0.18rem;
        font-weight: 600;
      }
    }
  }
  .ticket_info {
    margin-top: 0.1rem;
    .ticket_bill {
      .van-cell__title {
        font-size: 0.18rem;
        font-weight: 600;
      }
    }
    .ticket_bill::after {
      border-bottom: none;
    }
    p {
      font-size: 0.14rem;
      padding: 0.06rem 0.16rem;
      background-color: #fff;
      font-weight: 400;
      color: #999999;
    }
    .preview {
      padding: 0.16rem;
      background-color: #fff;

      .list {
        -webkit-flex: 1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-line-pack: center;
        align-content: center;
        span {
          background: #f3f6fe;
          width: 47%;
          height: 0.44rem;
          border-top: 0;
          float: left;
          text-align: center;
          color: #4276f6;
          line-height: 0.44rem;
          font-size: 0.14rem;
          margin-right: 0.1rem;
          margin-bottom: 0.1rem;
        }
      }
    }
  }
}
</style>
