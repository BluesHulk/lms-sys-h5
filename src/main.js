import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App'
import routes from './router'
// import axios from './axios';
import storeOption from './store';
import Vant from 'vant';
import { Toast } from 'vant';
import 'vant/lib/index.css';
import {
  getToken
} from './common/js/token.js'
// Vue.prototype.$ajax = axios
Vue.config.productionTip = false
Vue.use(Vant);

Vue.use(VueRouter);

Vue.use(Vuex);
Vue.use(Toast);
function getPageTitle(pageTitle) {
  const titleReverse = false;
  const title = "";
  let newTitles = [];
  if (pageTitle) newTitles.push(pageTitle);
  if (title) newTitles.push(title);
  if (titleReverse) newTitles = newTitles.reverse();
  return newTitles.join("-");
}

const store = new Vuex.Store(storeOption);
import './common/style/index.scss'
// 创建一个路由对象用于管理页面的路由
const router = new VueRouter({
  mode: 'history',
  routes: routes,
  // scrollBehavior (to, from, savedPosition) {
  //     console.log("savedPosition",savedPosition)
  //     return { x: 0, y: 0 };//期望滚动到哪个的位置
  // }
});

router.beforeEach((to, from, next) => {
  const hasToken =  getToken();
  // console.log(getToken())
  if (hasToken) {
    if (to.path == "/login" || to.path === "/userlogin") {
      Toast('已经登录不能返回登录页面')
      next({ path: "/task" });
      return;
    } else {
      next();
    }
  } else {
    if (to.path === "/login" || to.path === "/register" || to.path === "/404" || to.path === "/code" || to.path === "/userlogin" || to.path === "/find" || to.path === "/reset") {
      next();
    } else {
      next({ path: "/login" });
      // next();
    }
  }

});
router.afterEach((to, from) => {
  document.title = getPageTitle(to.meta.title);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})





