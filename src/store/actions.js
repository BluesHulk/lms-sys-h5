
import {
  getToken,
} from '../common/js/token.js'
const isDev = 'development';
const devDomain = '192.168.30.17';
const devPort = 19107;
export default {
  setToken({
    commit,
    dispatch
  }, token) {
    commit('SET_LOGIN_TOKEN', token);
  },
  setRefreshToken({
    commit,
    dispatch
  }, token) {
    commit('SET_LOGIN_TOKEN_REFRESH', token);
  },
  setMobile({
    commit,
    dispatch
  }, token) {
    commit('SET_MOBILE', token);
  },
  initWsMessage({ state }, { host, port }) {
    if (state.wsMsg) {
      console.log(`已经实例化`, state.wsMsg);
      return;
    }
    const domain = isDev ? devDomain : host;
    const _port = isDev ? devPort : port || devPort;
    const url = `ws://` + (isDev ? domain : window.top.location.hostname);
    const access_token = getToken();

    if (!access_token) return;
    const Authorization = 1;
    if (!Authorization) return;
    const wd = 1;
    if (!wd) return;
    const userInfo= 1;
    if (!userInfo) return;
    const staffId = 1; //Authorization
    if ('WebSocket' in window) {
      state.wsMsg = new WebSocket(url + `:${_port}/ws/message/center/notice/` + staffId);
      state.wsMsg.onmessage = event => {
        const data = event.data;
        if (!data) return;
        state.WsMessage = JSON.parse(data);
      };
    } else {
      // console.log('当前浏览器不支持');
    }
  },
}
