
import {
  getToken,
  removeToken,
  setToken,
  getRefreshToken,
  setRefreshToken,
  removeRefreshToken,
  getMobile,
  setMobile,
  removeMobile,
} from '../common/js/token.js'

import actions from './actions'
import * as getters from './getters'
const state = {
  token: getToken(),
  refresh_token:getRefreshToken(),
  mobile:getMobile(),
  islogin: false,
  securityCodeNextRequestTime: 0,
  wsMsg: null, // ws消息实例
  WsMessage: {},
};
export default {
  state,
  getters,
  mutations: {
    GET_LOGIN_VERIFICATIONN_CODE(state, data) {
      state.securityCodeNextRequestTime = 60;
    },
    SET_LOGIN_TOKEN(state, token) {
      setToken(token)
    },
    SET_LOGIN_TOKEN_REFRESH(state, refresh_token) {
      setRefreshToken(refresh_token)
    },
    SET_MOBILE(state,mobile) {
      setMobile(mobile)
    }
  },
  actions: actions
}
