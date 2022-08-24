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
  width: calc(100vw - 0.24rem);
  display: flex;
  height: 0.52rem;
  line-height: 0.52rem;
  margin: 0 auto;
  background: #ffffff;
  color: #999999;
  font-size: 0.17rem;
  font-weight: 500;
  border-radius: 0.08rem;
  font-family: 'PingFangSC-Semibold, PingFang SC';
  .tab-item {
    flex: 1;
    text-align: center;
    cursor: pointer;
    &:first-child {
      border-right: none;
      border-radius: 0.08rem 0 0 0.08rem;
      position: relative;
      &::after {
        content: '';
        width: 0.02rem;
        height: 0.36rem;
        position: absolute;
        right: 0;
        top: 0.08rem;
        background: #eeeeee;
      }
    }
    &:last-child {
      border-left: none;
      border-radius: 0 0.08rem 0.08rem 0px;
    }
    .tab-link {
      display: inline-block;
      width: 100%;
    }
    &.active {
      color: #4276f6 !important;
      font-weight: 600;
    }
  }
}
</style>
