<template>
  <div id="driver-info">
    <van-nav-bar
      title="司机信息"
      left-arrow
      @click-left="$router.push('/my')"
    />
    <div style="margin-top: 16px"></div>
    <van-cell-group>
      <van-cell 
        title="身份证信息" 
        :icon="require('@/assets/my/shenfenzheng.png')" 
        value="待上传" 
        value-class="card-info"
        title-style="font-size: 16px;"
        @click="$router.push('/idInfo')"
        is-link />
      <van-cell 
        title="驾驶证信息" 
        :icon="require('@/assets/my/jiashizheng.png')" 
        value="已完成" 
        value-class="license-info"
        title-style="font-size: 16px;"
        @click="$router.push('/licenceInfo')"
        is-link />
      <van-cell 
        title="从业资格证" 
        :icon="require('@/assets/my/zigezheng.png')" 
        value="审核中" 
        value-class="transport-certificate"
        title-style="font-size: 16px;"
        @click="$router.push('/certificateInfo')"
        is-link />
    </van-cell-group>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar, Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(NavBar);
export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
#driver-info{
  width: 100%;
  height: 100%;
  background-color: #F9FAFF;
}
.card-info{
  color: #FEAC49;
}
.license-info{
  color: #333333;
}
.transport-certificate{
  color: #49DFAF;
}
</style>