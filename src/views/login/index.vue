<template>
  <div id="login">
    <iIScroll ref="scroll" class="login-content">
      <div class="login_banner">
        <img src="../../common/image/login_images/denglu@2x.png" alt="" />
      </div>

      <p class="login_mobile">手机登录</p>
      <p class="login_regist">未注册的手机号验证通过后将自动注册</p>
      <p class="login_telephone">
        <van-field
          v-model="tel"
          class="input_phone"
          type="tel"
          placeholder="输入框手机号"
          maxlength="11"
          clearable
          @clear="clearInput"
          @blur="onBlurInput(tel)"
          @touchstart.native.stop="showKeyboard = true"
        >
          <van-icon
            class="iconfont"
            class-prefix="icon"
            slot="left-icon"
            name="phone"
          ></van-icon>
        </van-field>
      </p>
      <p class="get_code">
        <van-button
          class="btn"
          :disabled="btnAbled"
          @click="getMessageCode"
          type="info"
        >
          获取短信验证码
        </van-button>
      </p>
      <p class="agreement">
        <van-checkbox v-model="checked" label-disabled>
          我已阅读并理解
          <span @click="useragre">《用户协议》</span>
          和
          <span @click="privacy">《隐私协议》</span>
        </van-checkbox>
      </p>

      <div class="wechart_password">
        <ul>
          <li>
            <p>
              <svg class="wechart svg-icon" aria-hidden="true" @click="wechart">
                <use xlink:href="#icon-Wechat"></use>
              </svg>
            </p>
            <span>微信登录</span>
          </li>
          <li>
            <p>
              <svg
                class="password svg-icon"
                aria-hidden="true"
                @click="passwordLogin"
              >
                <use xlink:href="#icon-password"></use>
              </svg>
            </p>
            <span>密码登录</span>
          </li>
        </ul>
      </div>
    </iIScroll>
    <iIdeal :show="show" :type="type" @hideFade="hideFade"></iIdeal>
    <van-number-keyboard
      v-model="tel"
      :show="showKeyboard"
      @blur="onBlur(tel)"
      @input="onInput(tel)"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import iIScroll from '../../components/scroll/index.vue'
import iIdeal from '../../components/deal/index.vue'
import { isPhone } from '../../common/js/validate.js'
import user from '../../axios/services/user'
export default {
  name: 'Login',
  data() {
    return {
      tel: '',
      showKeyboard: false,
      btnAbled: true,
      checked: false,
      show: true,
      type: 1,
      wxCode: '',
    }
  },
  components: {
    iIScroll,
    iIdeal,
  },
  watch: {
    tel(value) {
      if (value.length == 11 && isPhone(value)) {
        this.btnAbled = false
      } else {
        this.btnAbled = true
      }
    },
  },
  methods: {
    hideFade() {
      this.show = true
    },
    privacy() {
      this.show = false
      this.type = 2
    },
    useragre() {
      this.show = false
      this.type = 1
    },
    clearInput() {
      this.btnAbled = true
    },
    onBlurInput(value) {
      if (this.btnAbled) {
        if (value != '') {
          this.$toast.fail('请输入正确的手机号')
        } else {
          this.$toast.fail('请输入手机号')
        }
        // this.$notify({
        //  type: 'warning',
        //  message:'请输入正确的手机号',
        //  background:'red',
        //  duration: 1000
        // })
      }
      this.showKeyboard = false
    },
    onBlur(value) {
      this.showKeyboard = false
    },
    onInput() {},
    onDelete() {},
    //获取验证码 跳转 传参
    getMessageCode() {
      if (this.checked) {
        user.getCaptcha(this.tel).then((res) => {
          console.log(res)
          const { code, message } = res
          if (code == 0) {
            this.$router.push('/code?tel=' + this.tel)
          } else {
            this.$toast.fail(message)
          }
        })
      } else {
        this.$toast.fail('请勾选并阅读协议')
      }
    },
    //账号密码登录 跳转
    passwordLogin() {
      this.$router.push('/userlogin')
    },

    //微信登录
    wechart() {
      let location = encodeURIComponent(window.location.href)
      let appid = 'wxa51735df9ba959bc'
      window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${location}&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect`
    },
    getQueryString(name) {
      let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      let r = window.location.search.substr(1).match(reg)
      if (r != null) {
        return unescape(r[2])
      }
      return null
    },

    getUrl() {
      let userAgent = navigator.userAgent
      if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
        sessionStorage.setItem('originUrl', location.href) // 用于ios分享
      }
      this.getBaseInfos()
    },
    // 编码函数
    getUrlParam(name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)') //构造一个含有目标参数的正则表达式对象
      var r = window.location.search.substr(1).match(reg) //匹配目标参数

      if (r != null) return unescape(r[2])
      return null //返回参数值
    },
    getBaseInfos() {
      if (this.isWeiXin()) {
        const code = this.getUrlParam('code') // 截取路径中的code
        let appid = 'wxa51735df9ba959bc'
        if (code == null || code === '') {
          let url = ''
          let userAgent = navigator.userAgent
          if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
            url = sessionStorage.getItem('originUrl')
          } else {
            url = window.location.href
          }
          window.location.href =
            'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' +
            appid +
            '&redirect_uri=' +
            encodeURIComponent(url) +
            '&response_type=code&scope=snsapi_base&state=1&connect_redirect=1#wechat_redirect'
        } else {
        }

        if (code != '' && code != null) {
          this.wxCode = code
          console.log(code)
          // this.getOpenid(code)
        }
      } else {
      }
    },
    getOpenId(code) {
      // 通过code获取 openId等用户信息，/api/user/wechat/login 为后台接口
      this.$http
        .post('/api/user/wechat/login', { code: code })
        .then((res) => {
          let datas = res.data
          if (datas.code === 0) {
            console.log('成功')
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    isWeiXin() {
      var ua = window.navigator.userAgent.toLowerCase()
      if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style scoped lang="scss">
#login {
  width: 100%;
  height: 100%;
  .login-container {
    width: 100%;
    height: 100%;
    -webkit-box-flex: 1;
    overflow: hidden;
  }
  .login_mobile {
    padding: 0 0.28rem;
    font-size: 0.24rem;
    font-family: 'PingFangSC-Semibold, PingFang SC';
    font-weight: 600;
    color: #333333;
    height: 0.33rem;
    line-height: 1;
  }
  .login_regist {
    padding: 0 0.28rem;
    height: 0.22rem;
    font-size: 0.16rem;
    font-family: 'PingFangSC-Regular, PingFang SC';
    font-weight: 400;
    color: #666666;
    line-height: 0.22rem;
  }
  .login_telephone {
    padding: 0 0.28rem;
    margin-top: 0.16rem;
    .input_phone {
      border-bottom: 1px solid #eee;
    }
  }
  .get_code {
    padding: 0 0.28rem;
    margin-top: 0.23rem;
    .btn {
      width: 100%;
      height: 0.44rem;
      font-weight: 500;
      font-size: 0.18rem;
      background: #4276f6;
      border-radius: 4px;
    }
  }
  .agreement {
    padding: 0 0.28rem;
    margin-top: 0.16rem;
    height: 0.2rem;
    font-size: 0.13rem;
    font-family: 'PingFangSC-Regular, PingFang SC';
    font-weight: 400;
    color: #333333;
    line-height: 0.2rem;
    span {
      color: #4276f6;
      font-weight: 500;
    }
  }
  .wechart_password {
    padding: 0 0.28rem;
    margin-top: 0.48rem;
    ul {
      display: flex;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      li {
        width: 0.6rem;
        margin-left: 0.72rem;
        p {
          margin-bottom: 0.08rem;
          .wechart {
            width: 0.4rem;
            height: 0.4rem;
            margin-left: 0.08rem;
          }
          .password {
            width: 0.4rem;
            height: 0.4rem;
            margin-left: 0.08rem;
          }
        }
        span {
          display: inline-block;
          font-size: 0.14rem;
          color: #666666;
        }
      }
      li:nth-of-type(1) {
        margin-left: -0.22rem;
      }
      li:nth-of-type(2) {
        margin-left: 0.22rem;
      }
    }
  }
}
</style>
