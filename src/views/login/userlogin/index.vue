<template>
  <div id="login_code">
    <iIScroll ref="scroll" class="login-content">
      <iIheader></iIheader>

      <p class="pass_text">密码登录</p>
      <p class="login_form">
        <van-form @submit="onSubmit">
          <van-field
            v-model="mobile"
            name="mobile"
            type="number"
            clearable
            placeholder="请输入手机号码/账户名"
          >
            <van-icon
              class="iconfont"
              class-prefix="icon"
              slot="left-icon"
              name="zhanghu"
              size="0.2rem"
            ></van-icon>
          </van-field>
          <van-field
            v-model="password"
            type="password"
            name="password"
            placeholder="请输入密码"
          >
            <van-icon
              size="0.2rem"
              class="iconfont"
              class-prefix="icon"
              slot="left-icon"
              name="mima"
            ></van-icon>
            <van-icon
              size="0.2rem"
              :class="isLock ? 'iconfont lockon' : 'iconfont'"
              class-prefix="icon"
              slot="right-icon"
              name="suodingmima"
              @click="lock"
            ></van-icon>
            <template #button>
              <van-button
                class="find"
                size="small"
                @click.stop.prevent="findPassword"
                type="default"
              >
                找回密码
              </van-button>
            </template>
          </van-field>
          <div style="margin: 16px;">
            <van-button
              block
              type="info"
              :loading="loading"
              :disabled="!checked"
              native-type="submit"
            >
              {{ loginText }}
            </van-button>
          </div>
        </van-form>
      </p>
      <p class="agreement">
        <van-checkbox v-model="checked" label-disabled>
          我已阅读并理解
          <span @click="useragre">《用户协议》</span>
          和
          <span @click="privacy">《隐私协议》</span>
        </van-checkbox>
      </p>
    </iIScroll>
    <iIdeal :show="show" :type="type" @hideFade="hideFade"></iIdeal>
  </div>
</template>

<script>
import iIScroll from '../../../components/scroll/index.vue'
import iIheader from '../../../components/header/index.vue'
import iIdeal from '../../../components/deal/index.vue'
import { isPhone } from '../../../common/js/validate.js'
import user from '../../../axios/services/user'
export default {
  name: 'Login',
  data() {
    return {
      mobile: '',
      password: '',
      isLock: false,
      showKeyboard: false,
      checked: false,
      isValid: false,
      show: true,
      type: 1,
      loginText: '登录',
      loading: false,
    }
  },
  components: {
    iIScroll,
    iIheader,
    iIdeal,
  },
  watch: {},
  mounted() {},
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
    lock() {
      if (this.isLock) {
        this.isLock = false
      } else {
        this.isLock = true
      }
    },
    getMessageCode() {
      user.getCaptcha(this.mobile).then((res) => {
        const { code, message } = res
        if (code == 0) {
          this.$router.push('/find?tel=' + this.mobile)
        } else {
          this.$toast.fail(message)
        }
      })
    },
    findPassword() {
      if (this.mobile == '') {
        this.$toast.fail('请输入手机号')
      } else if (!isPhone(this.mobile)) {
        this.$toast.fail('请输入正确的手机号')
      } else {
        this.getMessageCode()
      }
    },
    onSubmit(values) {
      if (values.mobile == '' && values.password == '') {
        this.$toast.fail('请输入手机号和密码')
      } else if (values.mobile == '') {
        this.$toast.fail('请输入手机号')
      } else if (values.password == '' && isPhone(values.mobile)) {
        this.$toast.fail('请输入密码')
      } else if (!isPhone(values.mobile)) {
        this.$toast.fail('请输入正确的手机号')
      } else if (
        isPhone(values.mobile) &&
        values.password &&
        values.password.length != 8
      ) {
        this.$toast.fail('请输入正确的密码长度')
      } else {
        // 此处验证通过 调用登录接口
        if (this.checked) {
          user
            .login(values)
            .then((res) => {
              const { message, code, data } = res
              this.loginText = '登录中'
              this.loading = true
              if (code === 0) {
                this.loading = false
                this.loginText = '登录'
                this.$toast.success('登录成功')
                this.$store.dispatch('setToken', data.access_token)
                this.$store.dispatch('setRefreshToken', data.refresh_token)
                this.$store.dispatch('setMobile', values.mobile)
                this.$router.push('/task')
              } else {
                this.loading = false
                this.loginText = '登录'
              }
            })
            .catch((err) => {})
        } else {
          this.$toast.fail('请勾选并阅读协议')
        }
      }
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
  .pass_text {
    padding: 0 0.28rem;
    font-size: 0.24rem;
    font-family: 'PingFangSC-Semibold, PingFang SC';
    font-weight: 600;
    color: #333333;
    height: 0.33rem;
    line-height: 1;
    margin-top: 0.28rem;
  }
  .login_form {
    padding: 0 0.28rem;
    font-size: 0.24rem;
    font-family: 'PingFangSC-Semibold, PingFang SC';

    margin-top: 0.28rem;
    .find {
      border: none;
      color: #4276f6;
      font-size: 16px;
    }
    .lockon {
      color: #4276f6;
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
}
</style>
