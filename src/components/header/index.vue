<template>
  <header id="header">
    <div class="content">
      <span class="leftspan" @click="backgo">
        <!-- <i class="logo"></i> -->
              <van-icon class="logo" name="arrow-left"
                        />
      </span>
      <div class="actions">{{title}}</div>
    </div>
  </header>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      objectId: '',
      objectType: '',
      searchText: '',
      title:''
    }
  },
  computed: {
    ...mapState(['searchState', 'falgkey', 'searchtList']),
  },
  watch: {},
  mounted(){
    this.title = this.getPageTitle(this.$route.meta.title)
  },
  methods: {
     getPageTitle(pageTitle) {
      const titleReverse = false;
      const title = "";
      let newTitles = [];
      if (pageTitle) newTitles.push(pageTitle);
      if (title) newTitles.push(title);
      if (titleReverse) newTitles = newTitles.reverse();
      return newTitles.join("-");
    },
    backgo() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="scss">
@import '../../common/style/variable';
#header {
  width: 100%;
  height: 0.44rem;
  line-height: 0.44rem;
  color: $color-text-l;
  .content {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0.1rem;
    line-height: 0.2rem;
    //background-color: #fff;
    position: relative;
    height: 0.44rem;
    top: 0;
    left: 0;
    right: 0;
    border-bottom: 1px solid rgba(25, 31, 37, 0.2);

    .leftspan {
      .logo {
        width: 0.2rem;
        height: 0.2rem;
        margin: 0;
        display: inline-block;
        background-position: 50%;
        background-repeat: no-repeat;
        -moz-background-size: 100%;
        background-size: 100%;
        color: #333333;
      }
    }
    .actions {
      width: 100%;
      text-align: center;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -moz-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      color: #333333;
    }
  }
}
</style>
