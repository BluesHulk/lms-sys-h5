<template>
  <div id="login_code">
    <iIScroll ref="scroll" class="login-content">
      <iIheader></iIheader>

      <p class="mobile_text">手机验证码</p>
      <p class="regist_code">验证码已发送至{{ tel }}</p>
      <p class="by_code">
        <van-password-input
          :value="code"
          :mask="false"
          :length="4"
          :focused="showKeyboard"
          :error-info="errorInfo"
          @focus="showKeyboard = true"
          @touchstart.native.stop="showKeyboard = true"
        />
      </p>

      <p class="get_code">
        <van-button
          class="btn"
          :disabled="messageTip == '重新获取短信验证码' ? false : true"
          @click="getMessageCode"
          type="info"
        >
          {{ messageTip }}
        </van-button>
      </p>
    </iIScroll>
    <van-number-keyboard
      v-model="code"
      :show="showKeyboard"
      @blur="onBlur(tel)"
      @input="onInput(tel)"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import iIScroll from '../../../components/scroll/index.vue'
import iIheader from '../../../components/header/index.vue'
import { isPhone } from '../../../common/js/validate.js'
import user from '../../../axios/services/user'
export default {
  name: 'Login',
  data() {
    return {
      messageTip: '获取短信验证码', //获取短信验证码
      code: '',
      errorInfo: '',
      tel: '',
      showKeyboard: false,
      btnAbled: true,
      checked: true,
      initTime: 60,
    }
  },
  components: {
    iIScroll,
    iIheader,
  },
  watch: {
    tel(value) {
      if (value.length == 11 && isPhone(value)) {
        this.btnAbled = false
      } else {
        this.btnAbled = true
      }
    },
    code(value) {
      console.log(value)
      // if (value.length === 4 && value !== '1234') {
      //   this.errorInfo = '验证码错误'
      // } else {
      //   this.errorInfo = ''
      // }
    },
  },
  mounted() {
    console.log(this.$route.query.tel)
    this.tel = this.$route.query.tel
    let timerId = setInterval(() => {
      this.initTime--
      this.messageTip = this.initTime + '秒后重试'
      if (this.initTime <= 0) {
        clearInterval(timerId)
        this.messageTip = '重新获取短信验证码'
        this.initTime = 60
      }
    }, 1000)
  },
  methods: {
    onBlur(value) {
      this.showKeyboard = false
      this.tel = this.$route.query.tel
      // 填充验证码失去键盘焦点 调用 验证手机号验证码接口 跳转重置密码页面
      user
        .RetrievePassword({
          iphone: this.tel,
          code: this.code,
        })
        .then((res) => {
          if (res.code == 0) {
            //  this.$router.push('/reset')
             this.$toast.success(res.message)

             this.$router.push('/reset?tel=' + this.tel + '&code=' + this.code)

          } else {
            this.$toast.fail(res.message)
          }
        })
    },
    onInput() {},
    onDelete() {},
    //获取验证码 跳转 传参
    getMessageCode() {
      user.getCaptcha(this.tel).then((res) => {
        console.log(res)
        const { code, message } = res
        if (code == 0) {
          this.$toast.success(message)
        } else {
          this.$toast.fail(message)
        }
      })
      //  this.$router.push({ name: 'code', params: { tel:this.tel }});
    },
  },
}
</script>

<style scoped lang="scss">
#login_code {
  width: 100%;
  height: 100%;
  .login-container {
    width: 100%;
    height: 100%;
    -webkit-box-flex: 1;
    overflow: hidden;
  }
  .mobile_text {
    padding: 0 0.28rem;
    font-size: 0.24rem;
    font-family: 'PingFangSC-Semibold, PingFang SC';
    font-weight: 600;
    color: #333333;
    height: 0.33rem;
    line-height: 1;
    margin-top: 0.28rem;
  }
  .regist_code {
    padding: 0 0.28rem;
    height: 0.22rem;
    font-size: 0.16rem;
    font-family: 'PingFangSC-Regular, PingFang SC';
    font-weight: 400;
    color: #666666;
    line-height: 0.22rem;
    margin-top: 0.1rem;
    margin-bottom: 0.16rem;
  }
  .by_code {
    padding: 0 0.28rem;
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
}
</style>
