<template>
  <div class="message-list">
  <van-nav-bar
    title="消息列表"
  />    
    <div class="content">
      <div 
        class="notice-box" 
        v-for="item in messageList"
        :key="item.id"
      >
        <span class="notice-time">{{ item.time }}</span>
        <div class="notice-content">
          <div class="notice-title">
            <div class="title-box">
              <img v-if="item.type == '0'" class="title-icon" src="@/assets/message/notice.png" alt="notice">
              <img v-else class="title-icon" src="@/assets/message/sys.png" alt="notice">
              <h2 class="title">{{ item.title }}</h2>
              <img v-if="item.isTop" class="new-icon" src="@/assets/message/new.png" alt="new">
            </div>
            <div v-if="item.state == '0'" class="notice-state">未读</div>
            <div v-else class="notice-read">已读</div>
          </div>
          <van-divider />
          <div class="info-box">
            <p class="notice-info van-multi-ellipsis--l3">
              {{ item.content }}
              <span class="text-link" v-if="item.type == '0'">文字链接></span>
            </p>
          </div>
          <van-divider v-if="item.type == '1'" />
          <div v-if="item.type == '1'" class="mission-link">点击查看任务详情></div>
        </div>
      </div>
    </div>
    <iItab :tabList="tabList" @tab-click="tabClick" :initSelect="tabIndex"></iItab>
  </div>
</template>

<script>
import iItab from '../../components/tab/index.vue'
import constant from '../../common/js/constant'
import Vue from 'vue';
import { NavBar } from 'vant';
import { Divider } from 'vant';

Vue.use(Divider); 
Vue.use(NavBar);
export default {
  name: 'Task',
  data() {
    return {
      tabList: constant.recommendTabs,
      tabIndex: 2,
      messageList: [
        {
          id:'1',
          time: '17:41',
          type: '0', // 0 公告通知，1 系统通知
          state: '0', // 0 未读， 1 已读
          isTop: true, //是否是最新一条
          content: '数字中国建设峰会官网由数字中国建设峰会组委会秘书处承办，福建省经济信息中心承建，提供峰会概览的。',
          title: '数字中国建设峰会',
        },
        {
          id:'2',
          time: '08-16 18:23',
          type: '1', // 0 公告通知，1 系统通知
          state: '1', // 0 未读， 1 已读
          isTop: true, //是否是最新一条
          content: '任务单THD26220012377将在16小时后失效，请尽快进厂。',
          title: '任务单自动失效通知',
        },
        {
          id:'3',
          time: '08-16 18:23',
          type: '1', // 0 公告通知，1 系统通知
          state: '0', // 0 未读， 1 已读
          isTop: false, //是否是最新一条
          content: '数字中国建设峰会官网由数字中国建设峰会组委会秘书处承办，福建省经济信息中心承建，提供峰会概览的。',
          title: '数字中国建设峰会',
        },
        {
          id:'4',
          time: '08-16 18:23',
          type: '0', // 0 公告通知，1 系统通知
          state: '1', // 0 未读， 1 已读
          isTop: false, //是否是最新一条
          content: '任务单THD26220012377将在16小时后失效，请尽快进厂。',
          title: '任务单自动失效通知',
        },
        {
          id:'5',
          time: '08-16 18:23',
          type: '0', // 0 公告通知，1 系统通知
          state: '0', // 0 未读， 1 已读
          isTop: false, //是否是最新一条
          content: '数字中国建设峰会官网由数字中国建设峰会组委会秘书处承办，福建省经济信息中心承建，提供峰会概览的。',
          title: '数字中国建设峰会',
        },
        {
          id:'6',
          time: '08-16 18:23',
          type: '1', // 0 公告通知，1 系统通知
          state: '1', // 0 未读， 1 已读
          isTop: false, //是否是最新一条
          content: '任务单THD26220012377将在16小时后失效，请尽快进厂。',
          title: '任务单自动失效通知',
        },
      ]
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
<style lang="scss" scoped>
.message-list{
    display: -webkit-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #F9FAFF;
}
.content{
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    overflow: auto;
    .notice-box{
      padding: 0 16px;
      text-align: center;
      .notice-time{
        display: inline-block;
        background-color: #fff;
        padding: 4px 8px;
        border-radius: 4px;
        margin: 16px;
        font-size: 14px;
        color: #999;
      }
      .notice-content{
        text-align: left;
        background-color: #fff;
        border-radius: 8px;
        .notice-title{
          padding: 12px 12px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .title-box{
            display: flex;
            align-items: center;
            .title-icon{
              display: block;
            }
            .title{
              display: inline-block;
              margin: 0 12px;
            }
            .new-icon{
              display: block;
            }
          }
          .notice-state{
            color: #FEAC49;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
          }
          .notice-read{
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #999999;            
          }
        }
        .info-box{
          color: #666;
          padding: 0 16px 8px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          line-height: 20px;
          .text-link{
            color: #4276F6;
          }
        }
        .mission-link{
          padding: 0 16px 12px;
          color: #4276F6;
          font-size: 14px;
        }
      }
    }
}
</style>
