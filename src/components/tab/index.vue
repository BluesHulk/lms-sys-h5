<template>
  <div class="tab">
    <router-link
      tag="div"
      class="tab-item"
      v-for="(item, index) in tabList"
      :key="index"
      :to="item.url"
    >
      <span class="tab-link" v-if="statusBill == 1 && index == 2">
        <span class="iconlink bill"></span>
      </span>
      <span class="tab-link" v-else>
        <span class="iconlink iconfont" :class="item.icon"></span>
        <span class="text">{{ item.name }}</span>
      </span>
    </router-link>
    <!--<router-link tag="div" class="tab-item" to="/CustomerService">
      <span class="tab-link">客服</span>
    </router-link>
     <router-link tag="div" class="tab-item" to="/Mine">
      <span class="tab-link">我的</span>
    </router-link>
    -->
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      // tabList:constant.recommendTabs,
      statusBill: 1,
    }
  },
  computed: {
    ...mapGetters(['WsMessage']),
  },
  watch: {
    WsMessage(data) {
      this.listenMessage(data)
    },
  },
  props: ['tabList'],
  methods: {
    initWs() {
      const data = {
        host: null,
        port: null,
      }
      this.$store.dispatch('initWsMessage', data)
    },
    listenMessage(msg) {
      console.log(msg)
    },
  },
  mounted() {
    this.initWs()
  },
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import '../../common/style/variable';
.tab {
  width: 100%;
  display: flex;
  height: 0.5rem;
  font-size: 0.14rem;
  background-color: #fff;
  flex-wrap: wrap;
  .tab-item {
    flex: 1;
    text-align: center;

    .tab-link {
      padding-bottom: 5px;
      color: #bfbfbf;
      display: flex;
      justify-content: center;
      flex-direction: column;
      .iconlink {
        height: 0.2rem;
        margin-top: 0.06rem;
        margin-bottom: 2px;
        font-size: 0.26rem;
        margin-bottom: 0.1rem;
      }
      span {
        display: inline-block;
      }
      .text {
        font-size: 0.12rem;
      }
    }
    &.router-link-active {
      .tab-link {
        color: #4276f6;
      }
    }
  }
  .tab-item:nth-of-type(3) {
    .tab-link {
      .iconlink {
        width: 100%;
        height: 100%;
        font-size: 0.62rem;
        margin-top: -0.2rem;
        margin-bottom: 0;
      }
      .bill {
        display: inline-block;
        width: 0.62rem;
        height: 0.62rem;
        background: url('../../common/image/task/bill.gif') no-repeat center
          center;
        background-size: contain;
        z-index: 999;
      }
    }
  }
}
</style>
