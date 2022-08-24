<template>
  <div class="hello">
    <div class="content">运单</div>
    <iItab :tabList="tabList" @tab-click="tabClick" :initSelect="tabIndex"></iItab>

  </div>
</template>

<script>
import iItab from '../../components/tab/index.vue'
import constant from '../../common/js/constant'
export default {
  name: 'Task',
  data() {
    return {
      tabList:constant.recommendTabs,
      tabIndex:1
    }
  },
  components: {
    iItab,
  },
  methods:{
        tabClick(tabIndex) {
        this.tabIndex = tabIndex;
       },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  display: -webkit-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.content{
  -webkit-flex-grow: 1;
    display: -webkit-flex;
    width: 100%;
    height: 100%;
}
</style>
