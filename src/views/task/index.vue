<template>
  <div class="task">
    <van-sticky>
      <div class="topbg">
        <h3>任务单</h3>
        <iItabStatus
          :tabList="tabListStatus"
          @tab-click="tabClickStatus"
          :initSelect="tabIndexStatus"
        ></iItabStatus>
      </div>
    </van-sticky>
    <div class="content">
      <div :class="tabIndexStatus == 0 ? 'list' : 'list yetcolor'">
        <div class="search" v-if="tabIndexStatus == 1">
          <van-search
            v-model="searchText"
            show-action
            placeholder="请输入关键字搜索"
            @search="onSearch"
            @refresh="onRefresh"
            @clear="clear"
          >
            <van-icon
              class="iconfont"
              class-prefix="icon"
              slot="left-icon"
              name="sousuo"
            ></van-icon>
            <template #action>
              <div @click="onSearch" class="search_txt">搜索</div>
            </template>
          </van-search>
        </div>

        <div class="filter_header" v-if="tabIndexStatus == 1">
          <div class="init">
            <iTabCount
              :tabList="tabListCount"
              @tab-click="tabClickCount"
              :initSelect="tabIndexCount"
            ></iTabCount>
            <span class="more" @click="moreFilter">
              <i class="iconfont icon-shaixuan"></i>
              更多筛选
            </span>
          </div>
        </div>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list
            v-model="loading"
            :finished="finished"
            :finished-text="finishedTxt"
            :immediate-check="false"
            @load="onLoad"
          >
            <template v-if="list.length > 0">
              <div
                class="task-item"
                @click.stop.prevent="toDetail(item)"
                v-for="(item, index) in list"
                :key="index"
              >
                <nav class="top-box">
                  <h3>
                    {{ item.infoType == '1' ? '自提任务' : '运输任务' }}
                    <span v-if="tabIndexStatus == 0">
                      {{ formateTime(item.loadStartTime) }}
                    </span>
                    <span @click.stop.prevent="detail(item)" v-else>
                      详情
                      <van-icon name="arrow" />
                    </span>
                  </h3>
                  <p class="center"></p>
                </nav>
                <section class="bottom-box">
                  <p class="center"></p>

                  <div class="load_place" v-if="item.isunload == 1">
                    <p class="expend-icon">
                      <img src="../../common/image/task/load.png" />
                      <span
                        class="expend"
                        @click.stop.prevent="expend(item.id)"
                      >
                        {{
                          filterList.indexOf(item.id) != -1 ? '收起' : '展开'
                        }}
                        <van-icon
                          :name="
                            filterList.indexOf(item.id) != -1
                              ? 'arrow-up'
                              : 'arrow-down'
                          "
                        />
                      </span>
                    </p>
                    <h4>泾阳声威集团有限公司</h4>
                    <div class="goodsInfo">
                      <p>
                        <span class="goods-txt">货品信息：</span>
                        <span class="goods-prod">{{ item.prodName }}</span>
                        <span class="amount">{{ item.amount }}吨</span>
                      </p>
                      <p v-if="filterList.indexOf(item.id) != -1">
                        <span class="send-txt">派单人：</span>
                        <span class="send-user">{{ item.dispatcherName }}</span>
                      </p>
                      <p>
                        <span class="custom">客户：</span>
                        <span class="custom-name">{{ item.customerName }}</span>
                      </p>
                      <p v-if="filterList.indexOf(item.id) != -1">
                        <span class="car">车辆信息：</span>
                        <span class="car_info">{{ item.licensePlate }}</span>
                      </p>
                    </div>
                    <p v-if="filterList.indexOf(item.id) != -1">
                      <span class="jobcode">任务单号：</span>
                      <span>{{ item.weighNo }}</span>
                    </p>
                    <p v-if="tabIndexStatus == 0">
                      <span class="loadtime">装货时间：</span>
                      <span>
                        {{ formateLoadTime(item.loadStartTime) }} 至
                        {{ formateLoadTime(item.loadEndTime) }}
                      </span>
                    </p>
                    <p class="finish" v-else>
                      <span>完成时间：</span>
                      <span>{{ formateHours(item.loadEndTime) }}</span>
                    </p>
                    <van-icon
                      v-if="tabIndexStatus == 1"
                      :class="
                        item.isunload == 1
                          ? 'iconfont finish-icon'
                          : 'iconfont finish-grey'
                      "
                      class-prefix="icon"
                      name="finish"
                    ></van-icon>
                  </div>
                  <div class="unload_place">
                    <p class="expend-icon">
                      <img src="../../common/image/task/unload.png" />
                      <span
                        class="expend"
                        @click.stop.prevent="expend(item.id)"
                      >
                        {{
                          filterList.indexOf(item.id) != -1 ? '收起' : '展开'
                        }}
                        <van-icon
                          :name="
                            filterList.indexOf(item.id) != -1
                              ? 'arrow-up'
                              : 'arrow-down'
                          "
                        />
                      </span>
                    </p>
                    <h4>泾阳声威集团有限公司</h4>
                    <div class="goodsInfo">
                      <p>
                        <span class="goods-txt">货品信息：</span>
                        <span class="goods-prod">{{ item.prodName }}</span>
                        <span class="amount">{{ item.amount }}吨</span>
                      </p>
                      <p v-if="filterList.indexOf(item.id) != -1">
                        <span class="send-txt">派单人：</span>
                        <span class="send-user">{{ item.dispatcherName }}</span>
                      </p>
                      <p>
                        <span class="custom">客户：</span>
                        <span class="custom-name">{{ item.customerName }}</span>
                      </p>
                      <p v-if="filterList.indexOf(item.id) != -1">
                        <span class="car">车辆信息：</span>
                        <span class="car_info">{{ item.licensePlate }}</span>
                      </p>
                    </div>
                    <p v-if="filterList.indexOf(item.id) != -1">
                      <span class="jobcode">任务单号：</span>
                      <span>THD26220012377</span>
                    </p>
                    <p v-if="tabIndexStatus == 0">
                      <span class="unloadtime">卸货时间：</span>
                      <span>
                        {{ formateLoadTime(item.unloadStartTime) }} 至
                        {{ formateLoadTime(item.unloadEndTime) }}
                      </span>
                    </p>
                    <p class="finish" v-else>
                      <span>完成时间：</span>
                      <span>{{ formateHours(item.unloadEndTime) }}</span>
                    </p>
                  </div>
                  <div class="operation_btn" v-if="tabIndexStatus == 0">
                    <van-button
                      class="btn"
                      color="#4276F6"
                      @click.stop.prevent="codeInFact(item)"
                      v-if="item.iscomplete == 1"
                    >
                      <i class="iconfont icon-erweima"></i>
                      二维码进厂
                    </van-button>
                    <van-button
                      class="btn"
                      color="#FEAC49"
                      @click.stop.prevent="viewBill(item)"
                      v-if="item.isunload == 1 && item.iscomplete == 1"
                    >
                      <i class="iconfont icon-yundan1"></i>
                      查看运单
                    </van-button>
                    <van-button
                      class="btn"
                      color="#8E6EFF"
                      @click.stop.prevent="completeInfomation"
                      v-if="item.iscomplete == 0"
                    >
                      请完善信息 >
                    </van-button>
                  </div>
                </section>
              </div>
            </template>
            <template v-else>
              <van-empty
                class="custom-image"
                :image="noneImg"
                description="暂无数据"
              />
            </template>
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
    <iItab
      :tabList="tabList"
      @tab-click="tabClick"
      :initSelect="tabIndex"
    ></iItab>
    <van-action-sheet v-model="showPopover" title="筛选">
      <div class="context">
        <h5>完成时间</h5>
        <iTabType
          :tabList="monthList"
          @tab-click="tabClickMonth"
          :initSelect="tabIndexType"
        ></iTabType>
        <div class="timeDate">
          <span>
            <van-cell
              title="起始时间"
              :value="begindate"
              @click="showBegin = true"
            />
            <van-calendar v-model="showBegin" @confirm="onConfirmStart" />
          </span>
          <span>
            <van-cell
              title="结束时间"
              :value="enddate"
              @click="endShow = true"
            />
            <van-calendar v-model="endShow" @confirm="onConfirmEnd" />
          </span>
        </div>
        <h5>任务单类型</h5>
        <iTabType
          :tabList="typeList"
          @tab-click="tabClickType"
          :initSelect="tabIndexjob"
        ></iTabType>
        <div class="btn-bottom">
          <van-button class="btn reset" color="#FFFFFF">重置</van-button>
          <van-button class="btn corfim" color="#4276F6">确定</van-button>
        </div>
      </div>
    </van-action-sheet>
    <van-action-sheet v-model="codeInFactory" title="二维码进厂">
      <div class="selectInfactory">
        <dl
          :class="whetherLoad ? '' : 'active'"
          @click.stop.prevent="goDetail(whetherLoad)"
        >
          <dd>
            <h1>我要装货</h1>
            <p>任务单号：THD266819383</p>
          </dd>
          <dt><img src="../../common/image/task/load-bg.png" alt="" /></dt>
        </dl>
        <dl
          :class="whetherunLoad ? '' : 'active'"
          @click.stop.prevent="goDetail(whetherunLoad)"
        >
          <dd>
            <h1>我要卸货</h1>
            <p>任务单号：THD266819383</p>
          </dd>
          <dt><img src="../../common/image/task/unload-bg.png" alt="" /></dt>
        </dl>
      </div>
    </van-action-sheet>
    <van-action-sheet v-model="complateInfo" title="完善信息">
      <div class="complateInfo">
        <dl :class="idNumerInfo ? '' : 'active'">
          <dd>
            <h1>身份证信息</h1>
            <p>请上传身份证信息</p>
          </dd>
          <dt>
            <span>已完善</span>
            <img src="../../common/image/task/info.png" alt="" />
          </dt>
        </dl>
        <dl :class="driverInfo ? '' : 'active'">
          <dd>
            <h1>驾驶证信息</h1>
            <p>驾驶证信息已完善</p>
          </dd>
          <dt>
            <span>已完善</span>
            <img src="../../common/image/task/info.png" alt="" />
          </dt>
        </dl>
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import iItab from '../../components/tab/index.vue'
import iItabStatus from '../../components/tab/tab-status.vue'
import iTabCount from '../../components/tab/tab-count.vue'
import iTabType from '../../components/tab/tab-type.vue'
import constant from '../../common/js/constant'
import moment from 'moment'
import taskApi from '../../axios/services/task'
export default {
  name: 'Task',
  data() {
    return {
      complateInfo: false,
      idNumerInfo: false,
      driverInfo: false,
      codeInFactory: false,
      tabIndexjob: null,
      whetherLoad: false,
      whetherunLoad: false,
      typeList: [
        {
          name: '提货任务',
          key: '1',
        },
        {
          name: '运输任务',
          key: '2',
        },
      ],
      begindate: '',
      enddate: '',
      showBegin: false,
      endShow: false,
      monthList: [
        {
          name: '近1个月',
          key: 'one',
        },
        {
          name: '近3个月',
          key: 'three',
        },
        {
          name: '近6个月',
          key: 'six',
        },
      ],
      tabIndexType: null,
      noneImg: require('../../common/image/no-data.png'),
      searchText: '',
      finishedTxt: '',
      tabList: constant.recommendTabs,
      tabIndex: 0,
      tabListCount: [
        { name: '已完成', key: '0' },
        { name: '失效', key: '1' },
      ],
      tabIndexCount: 0,
      tabListStatus: [
        { name: '待进厂', key: '0' },
        { name: '已完成', key: '1' },
      ],
      tabIndexStatus: 0,
      list: [
        {
          prodName: '水泥',
          amount: 20,
          licensePlate: '浙A12345',
          custom: '张三',
          sendUser: '李四',
          time: 1659691524088,
          type: '1',
          infoType: 1, //任务类型 1自提 2运输任务
          id: '1213131',
          orderNum: '123',
          companyName: '公司嘎嘎嘎',
          loadStartTime: 1660010173559,
          loadEndTime: 1659691524088,
          unloadStartTime: 1659691524088,
          unloadEndTime: 1659691524088,
          isunload: 1, //卸货 是否卸货
          iscomplete: 1, //已完成图标标记 1完成 2失效
        },
        {
          prodName: '水泥2',
          amount: 21,
          licensePlate: '浙A12222',
          custom: '王五',
          sendUser: '邓八',
          time: 1658691524088,
          type: '2',
          infoType: 2,
          id: '12131312222212',
          orderNum: '123',
          companyName: '公司嘎嘎嘎',
          loadStartTime: 1659691524088,
          loadEndTime: 1659691524088,
          unloadStartTime: 1659691524088,
          unloadEndTime: 1659691524088,
          isunload: 2,
          iscomplete: 1,
        },
        {
          prodName: '水泥2',
          amount: 21,
          licensePlate: '浙A12222',
          custom: '王五',
          sendUser: '邓八',
          time: 1658691524088,
          type: '2',
          infoType: 2,
          id: '12131312222212',
          orderNum: '123',
          companyName: '公司嘎嘎嘎',
          loadStartTime: 1659691524088,
          loadEndTime: 1659691524088,
          unloadStartTime: 1659691524088,
          unloadEndTime: 1659691524088,
          isunload: 2,
          iscomplete: 0,
        }
      ],
      filterList: [],
      loading: false,
      finished: false,
      refreshing: false, //下拉刷新
      totalNum: 0,
      params: {
        current: 1,
        size: 10,
        taskOrderStatus: '1',
        // startTime:""
      },
      isSearch: false,
      showPopover: false,
      currentItem: {},
    }
  },
  components: {
    iItab,
    iItabStatus,
    iTabCount,
    iTabType,
  },
  created() {
    this.getListData()
  },
  methods: {
    /* 判断是ios还是安卓 */
    handleGoto(marker) {
      let UserLocation = [39.98871, 116.43234] //marker.position
      var u = navigator.userAgent,
        app = navigator.appVersion
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 //android终端或者uc浏览器
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
      console.log(isiOS)
      let poiname = '百度大厦' //marker.name //终点地址名称
      if (isAndroid) {
        let url =
          'androidamap://navi?sourceApplication=amap&poiname=' +
          poiname +
          '&lat=' +
          UserLocation[1] +
          '&lon=' +
          UserLocation[0] +
          '&dev=1&style=2'
        window.open(url)
      }
      if (isiOS) {
        console.log('是否进入IOS跳转')
        let url =
          'iosamap://viewMap?sourceApplication=amap&poiname=' +
          poiname +
          '&lat=' +
          UserLocation[1] +
          '&lon=' +
          UserLocation[0] +
          '&dev=0'
        window.open(url)
      }
    },

    // 查看运单 跳转
    viewBill(item) {},
    // 列表项进详情
    toDetail(item) {
      if (this.tabIndexStatus == 0) {
        const url = '/taskdetail/wait?id=' + item.id
        this.$router.push(url)
      } else {
        const url = '/taskdetail/done?id=' + item.id
        this.$router.push(url)
      }
    },
    //已完成进入详情
    detail(item) {
      const url = '/taskdetail/done?id=' + item.id
      this.$router.push(url)
    },

    // 装卸货进详情页面
    goDetail(val) {
      if (!val) {
        return
      } else {
        if (this.tabIndexStatus == 0) {
          const url = '/taskdetail/wait?id=' + this.currentItem.id
          this.$router.push(url)
        } else {
          const url = '/taskdetail/done?id=' + this.currentItem.id
          this.$router.push(url)
        }
      }
    },
    //二维码进厂
    codeInFact(item) {
      //自提任务直接进详情 运输任务需要选择装货还是卸货
      if (item.infoType == 1) {
        const url = '/taskdetail/wait?id=' + item.id
        this.$router.push(url)
      } else {
        //根据数据判断是否已经装卸货 显示 shettle 添加状态
        this.whetherLoad = true
        this.whetherunLoad = false
        this.codeInFactory = true
        this.currentItem = item
      }
    },
    // 完善信息
    completeInfomation(item) {
      // 判断信息是否完善
      this.complateInfo = true
      this.idNumerInfo = true
      this.driverInfo = false
    },
    onConfirmStart(date) {
      this.showBegin = false
      this.begindate = this.formateLoadTime(date)
    },
    onConfirmEnd(date) {
      this.endShow = false
      this.enddate = this.formateLoadTime(date)
    },
    tabClickType(tabIndex) {
      this.tabIndexjob = tabIndex
    },
    tabClickMonth(tabIndex) {
      this.tabIndexType = tabIndex
    },
    moreFilter() {
      this.showPopover = true
    },
    clear() {
      this.searchText = ''
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false
      this.refreshing = true
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.totalNum = 0
      this.params.current = 1
      this.onLoad()
    },
    onLoad() {
      if (this.refreshing) {
        this.list = []
        this.refreshing = false
      } else if (this.isSearch) {
        this.list = []
        this.totalNum = 0
        this.params.current = 1
      } else {
        this.params.current++
      }
      this.getListData()
    },
    getListData() {
      taskApi.getTableData(this.params).then((result) => {
        const { code, data, message } = result
        if (code == 0) {
          const records = data.records
          this.list = []
          this.list = [...this.list, ...records]
          this.totalNum = this.totalNum + this.list.length
          //每一次加载完设置false，便于下次继续加载
          this.loading = false
          this.refreshing = false
          //判断是否还有数据加载
          if (this.list.length == 0) {
            this.finished = true
            this.finishedTxt = ''
          } else {
            if (this.params.size > records.length) {
              this.finished = true
              this.finishedTxt = '没有更多了'
            }
          }
        } else {
          this.$toast.fail(message)
        }
      })
    },
    onSearch(val) {
      this.totalNum = 0
      this.params.current = 1
      if (val === '') {
        this.isSearch = false
      } else {
        this.isSearch = true
      }
      this.onLoad()
    },
    expend(id) {
      if (this.filterList.indexOf(id) != -1) {
        this.filterList = this.filterList.filter((item) => {
          return item != id
        })
      } else {
        this.filterList.push(id)
      }
    },
    formateHours(time) {
      return moment(time).format('YYYY-MM-DD HH:mm')
    },
    formateLoadTime(time) {
      return moment(time).format('YYYY-MM-DD ')
    },
    formateTime(time) {
      return moment(time).calendar(null, {
        sameDay: '[今天] HH:mm',
        nextDay: '[明天] HH:mm',
        nextWeek: 'YYYY-MM-DD HH:mm',
        lastDay: '[昨天] HH:mm',
        lastWeek: 'YYYY-MM-DD HH:mm',
        sameElse: 'YYYY-MM-DD HH:mm',
      })
    },
    tabClick(tabIndex) {
      this.tabIndex = tabIndex
    },
    tabClickStatus(tabIndex) {
      this.tabIndexStatus = tabIndex
      this.params.taskOrderStatus = tabIndex == 0 ? 1 : 3
      this.getListData()
    },
    tabClickCount(tabIndex) {
      this.tabIndexCount = tabIndex
      this.params.taskOrderStatus = tabIndex == 0 ? 3 : 4
      this.getListData()
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.task {
  display: -webkit-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .topbg {
    width: 100%;
    height: 1.34rem;
    background: url('../../common/image/task/yundan@2x.png') no-repeat center
      center;
    background-size: 100% 100%;
    h3 {
      padding: 0.16rem 0.12rem;
      font-size: 0.28rem;
      font-family: 'PingFangSC-Semibold, PingFang SC';
      font-weight: 600;
      color: #ffffff;
    }
  }
  .content {
    display: -webkit-flex;
    -webkit-flex-grow: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: scroll;

    .yetcolor {
      background: #f9faff !important;
    }
    .list {
      flex: 1;
      -webkit-flex-grow: 1;
      padding-bottom: 0.5rem;
      background: linear-gradient(
        359deg,
        rgba(112, 172, 255, 0) 0%,
        rgba(0, 98, 255, 0.5) 70%,
        #4276f6 100%
      );
      .filter_header {
        margin: 0.1rem 0;
        .init {
          display: -webkit-flex;
          display: flex;
          width: calc(100vw - 0.24rem);
          margin: 0 auto;
          background: #f9faff;
          .more {
            display: inline-block;
            line-height: 0.36rem;
            font-size: 0.14rem;
            font-weight: 400;
            color: #999999;
            margin-left: 0.25rem;
          }
        }
      }
      .search {
        .search_txt {
          color: #4276f6;
        }
      }
      .task-item {
        padding: 0 0.12rem;
        margin-bottom: 0.1rem;
        .top-box {
          width: 100%;
          height: 0.5rem;
          background: #fff;
          position: relative;
          border-radius: 0.08rem 0.08rem 0 0;
          border: 1px dashed #888;
          line-height: 0.5rem;
          .center {
            width: 100%;
            height: 0.01rem;
            border-bottom: 1px dashed #888;
          }
          h3 {
            font-weight: 600;
            font-size: 0.18rem;
            color: #333333;
            padding: 0 0.16rem;
            span {
              font-size: 0.14rem;
              font-weight: 400;
              color: #666666;
              float: right;
            }
          }
        }
        .bottom-box {
          width: 100%;
          min-height: 2rem;
          background: #fff;
          position: relative;
          border-radius: 0 0 0.08rem 0.08rem;
          border: 1px dashed #888;
          border-top: none;

          .load_place {
            padding: 0 0.16rem;
            border-radius: 4px;
            margin-bottom: 0.2rem;
            position: relative;
            padding-top: 0.1rem;
            p {
              background: #f3f6fe;
            }

            .expend-icon {
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
                font-size: 0.14rem;
              }
            }
            h4 {
              font-size: 0.16rem;
              font-weight: 600;
              color: #333333;
              padding: 0.1rem 0.1rem 0.05rem 0.1rem;
              background: #f3f6fe;
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
                width: 0.7rem;
                display: inline-block;
                font-size: 0.14rem;
                color: #666666;
              }
              span:nth-of-type(2) {
                font-size: 0.14rem;
                color: #333333;
              }
            }
            .finish {
              font-size: 0.14rem;
              span {
                color: #0fc48a !important ;
              }
            }
            .finish-icon {
              position: absolute;
              font-size: 0.48rem;
              width: 0.48rem;
              height: 0.48rem;
              top: 0.33rem;
              right: 0.3rem;
              color: #4276f6;
            }
            .finish-grey {
              position: absolute;
              font-size: 0.48rem;
              width: 0.48rem;
              height: 0.48rem;
              top: 0.33rem;
              right: 0.3rem;
              color: #bfbfbf;
            }
            .goodsInfo {
              color: #666666;

              p {
                font-size: 0.14rem;
                color: #666666;
                span {
                  display: inline-block;
                }
                .goods-txt {
                  width: 0.75rem;
                }
                .send-txt {
                  width: 0.75rem;
                }
                .custom {
                  width: 0.75rem;
                }
                .car {
                  width: 0.75rem;
                }

                .goods-prod {
                  color: #333333;
                }
                .amount {
                  color: #333333;
                  padding-left: 0.09rem;
                }
                .expend {
                  position: relative;
                  font-size: 0.14rem;
                  color: #999999;
                  padding-left: 0.08rem;
                  float: right;
                  margin-right: 0.2rem;
                  //  &::after {
                  //content: '';
                  //   display: block;
                  //   position: absolute;
                  //top: -0.02rem;
                  //     right: -0.22rem;
                  //   height: 0.2rem;
                  //  width: 0.2rem;
                  //   background-image: url('../../common/image/task/arrow-dowm.png');
                  // background-size: contain;
                  //  }
                }
                .send-user {
                  font-size: 0.14rem;
                  color: #333;
                }
                .custom-name {
                  font-size: 0.14rem;
                  color: #333;
                }
                .car_info {
                  font-size: 0.14rem;
                  color: #333;
                }
              }
              p:nth-of-type(1) {
                padding: 0.05rem 0.1rem 0.1rem 0.1rem;
              }
              p:nth-of-type(2) {
                padding: 0.05rem 0.1rem;
              }
              p:nth-of-type(3) {
                padding: 0.05rem 0.1rem;
              }
              p:nth-of-type(4) {
                padding: 0.05rem 0.1rem;
              }
            }
          }
          .unload_place {
            padding: 0 0.16rem;
            border-radius: 4px;
            margin-bottom: 0.2rem;
            position: relative;
            padding-top: 0.1rem;
            p {
              background: #f3f6fe;
            }

            .expend-icon {
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
              span:nth-of-type(2) {
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
            .finish {
              span {
                color: #0fc48a !important ;
              }
            }

            .goodsInfo {
              color: #666666;

              p {
                font-size: 0.14rem;
                color: #666666;
                span {
                  display: inline-block;
                }
                .goods-txt {
                  width: 0.75rem;
                }
                .send-txt {
                  width: 0.75rem;
                }
                .custom {
                  width: 0.75rem;
                }
                .car {
                  width: 0.75rem;
                }

                .goods-prod {
                  color: #333333;
                }
                .amount {
                  color: #333333;
                  padding-left: 0.09rem;
                }
                .expend {
                  position: relative;
                  font-size: 0.14rem;
                  color: #999999;
                  padding-left: 0.08rem;
                  float: right;
                  margin-right: 0.2rem;
                  //  &::after {
                  //content: '';
                  //   display: block;
                  //   position: absolute;
                  //top: -0.02rem;
                  //     right: -0.22rem;
                  //   height: 0.2rem;
                  //  width: 0.2rem;
                  //   background-image: url('../../common/image/task/arrow-dowm.png');
                  // background-size: contain;
                  //  }
                }
                .send-user {
                  font-size: 0.14rem;
                  color: #333;
                }
                .custom-name {
                  font-size: 0.14rem;
                  color: #333;
                }
                .car_info {
                  font-size: 0.14rem;
                  color: #333;
                }
              }
              p:nth-of-type(1) {
                padding: 0.05rem 0.1rem 0.1rem 0.1rem;
              }
              p:nth-of-type(2) {
                padding: 0.05rem 0.1rem;
                font-size: 0.14rem;
              }
              p:nth-of-type(3) {
                padding: 0.05rem 0.1rem;
              }
              p:nth-of-type(4) {
                padding: 0.05rem 0.1rem;
              }
            }
          }
          .operation_btn {
            padding: 0 0.16rem;
            display: flex;
            font-size: 0.14rem;
            margin-bottom: 0.16rem;
            .btn {
              flex: 1;
              margin-right: 0.1rem;
              i {
                margin-right: 0.04rem;
              }
            }
            .btn:nth-of-type(2) {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
  .context {
    padding: 0 0.16rem;

    h5 {
      padding-top: 0.17rem;
      padding-bottom: 0.1rem;
      font-size: 0.18rem;
      font-weight: 600;
      color: #333333;
    }
    .timeDate {
      display: flex;
      margin-top: 0.1rem;
      span {
        flex: 1;
        margin-right: 0.1rem;
        .van-cell {
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          background: #f6f8fc;
          height: 0.65rem;
          .van-cell__value {
            text-align: inherit;
            position: relative;
            &::after {
              content: '';
              width: 0.2rem;
              height: 0.2rem;
              margin: 0;
              background-image: url(../../common/image/right-arrow.png);
              display: inline-block;
              background-position: 50%;
              background-repeat: no-repeat;
              -moz-background-size: 100%;
              background-size: 100%;
              position: absolute;
              right: 0.1rem;
              top: 2px;
            }
          }
        }
      }
    }
    .btn-bottom {
      display: flex;
      height: 0.6rem;
      padding: 0.08rem 0;
      position: relative;
      margin-top: 0.2rem;
      &::after {
        content: '';
        width: 100vw;
        height: 1px;
        background-color: #eee;
        position: absolute;
        left: -0.16rem;
        top: 0;
      }
      .btn {
        flex: 1;
        border-radius: 4px !important;
        font-size: 0.18rem;
      }
      .reset {
        color: #333 !important;
        margin-right: 0.08rem;

        border: 1px solid rgba(25, 31, 37, 0.12) !important;
      }
    }
  }
  .selectInfactory {
    padding: 0 0.16rem;
    padding-bottom: 0.2rem;
    dl {
      width: 100%;
      height: 1rem;
      display: flex;
      background: linear-gradient(134deg, #4d96ff 0%, #4276f6 100%);
      border-radius: 4px;
      margin-top: 0.16rem;
      dd {
        width: 2.25rem;
        h1 {
          padding: 0.16rem;
          font-size: 0.28rem;
          color: #ffffff;
          margin-top: 0.08rem;
        }
        p {
          padding: 0 0.16rem 0.16rem 0.16rem;
          font-size: 0.16rem;
          color: #ffffff;
        }
      }
      dt {
        flex: 1;
        img {
          display: inline-block;
          width: 100%;
        }
      }
    }
    .active {
      background: #f3f6fe;
      dd {
        h1 {
          color: #dddddd;
        }
        p {
          color: #dddddd;
        }
      }
      dt {
        img {
          opacity: 0.5;
        }
      }
    }
  }
  .complateInfo {
    padding: 0 0.16rem;
    padding-bottom: 0.2rem;
    dl {
      width: 100%;
      height: 1rem;
      display: flex;
      background: linear-gradient(134deg, #4d96ff 0%, #4276f6 100%);
      border-radius: 4px;
      margin-top: 0.16rem;
      dd {
        width: 2.25rem;
        h1 {
          padding: 0.16rem;
          font-size: 0.28rem;
          color: #ffffff;
          margin-top: 0.08rem;
        }
        p {
          padding: 0 0.16rem 0.16rem 0.16rem;
          font-size: 0.16rem;
          color: #ffffff;
        }
      }
      dt {
        flex: 1;
        position: relative;
        span {
          position: absolute;
          right: 0;
          top: 0;
          width: 0.74rem;
          height: 0.25rem;
          background: linear-gradient(134deg, #49dfaf 0%, #23c6ba 100%);
          border-radius: 0px 0.04rem 0px 0.18rem;
          text-align: center;
          line-height: 0.25rem;
          color: #fff;
          opacity: 1;
          z-index: 99;
        }
        img {
          display: inline-block;
          width: 100%;
        }
      }
    }
    .active {
      background: #f3f6fe;
      dd {
        h1 {
          color: #dddddd;
        }
        p {
          color: #dddddd;
        }
      }
      dt {
        img {
          opacity: 0.5;
        }
      }
    }
  }
}
.van-action-sheet__header {
  border-bottom: 1px solid rgba(25, 31, 37, 0.12);
}
</style>
