<template>
  <div id="underway">
    <iIScroll ref="scroll" class="login-content"></iIScroll>
      <iIheader></iIheader>
  </div>
</template>

<script>
import iIScroll from '../../../components/scroll/index.vue'
import iIheader from '../../../components/header/index.vue'
export default {
  name: 'Underway',
  data() {
    return {

    }
  },
  components: {
    iIScroll,
    iIheader,
  },
  watch: {

  },
  mounted() {

  },
  methods: {

  },
}
</script>

<style scoped lang="scss">
#underway {
  width: 100%;
  height: 100%;
}
</style>
