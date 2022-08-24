<template>
  <div class="tab">
    <div
      v-for="(item, index) in tabList"
      :key="item.key"
      class="tab-item"
      :class="{ active: selectIndex == index }"
      @click="tab(index, item)"
    >
      <span class="tab-link">{{ item.name }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tabList: {
      type: Array,
      default: () => {},
    },
    initSelect: {
      type: Number,
      default: 0,
    },
    finishCount: {
      type: Number,
      default: 0,
    },
    noyetCount: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      // tabList:constant.recommendTabs
      selectIndex: this.initSelect,
    }
  },
  watch: {
    $route(to, from) {
      console.log(to, from)
    },
    initSelect(val) {
      this.selectIndex = val
    },
  },
  mounted() {},
  methods: {
    tab(index, item) {
      this.selectIndex = index
      this.$emit('tab-click', index)
    },
  },
}
</script>
<style lang="scss" scoped>
.tab {
  width: 100%;
  display: flex;
  height: 0.38rem;
  line-height: 0.38rem;
  color: #999999;
  font-size: 0.14rem;
  font-weight: 500;
  border-radius: 0.04rem;
  font-family: 'PingFangSC-Semibold, PingFang SC';
  margin-bottom: .1rem;
  .tab-item {
    flex: 1;
    text-align: center;
    cursor: pointer;
    margin-right: 0.1rem;
    .tab-link {
      display: inline-block;
      width: 100%;
      border: 1px solid #ccc;
    }
    &.active {
      color: #4276f6 !important;
      background: url('../../common/image/task/btn-grey.png') no-repeat center
        center;
      background-size: 100% 0.37rem;
      .tab-link {
        border: none !important;
      }
    }
  }
}
</style>
