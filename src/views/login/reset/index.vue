<template>
  <div id="login">
    <iIScroll ref="scroll" class="login-content">
      <iIheader></iIheader>

      <p class="login_mobile">重设密码</p>
      <p class="login_veterfiy">我们需要对您的手机号码进行验证</p>
      <p class="login_telephone">
        <van-field
          v-model="password"
          class="input_pass"
          placeholder="请输入密码"
          maxlength="8"
          clearable
          @clear="clearInput"
          @blur="onBlurInput(password)"
        >
          <van-icon
            class="iconfont"
            class-prefix="icon"
            slot="left-icon"
            name="mima"
          ></van-icon>
        </van-field>
      </p>
      <p class="get_code">
        <van-button
          class="btn"
          :disabled="btnAbled"
          @click="getLogin"
          type="info"
        >
          提交
        </van-button>
      </p>
    </iIScroll>
  </div>
</template>

<script>
import iIScroll from '../../../components/scroll/index.vue'
import iIheader from '../../../components/header/index.vue'
import { minLenEghit } from '../../../common/js/validate.js'
import user from '../../../axios/services/user'
export default {
  name: 'Login',
  data() {
    return {
      password: '',
      btnAbled: true,
      checked: true,
      show: true,
      tel: '',
    }
  },
  components: {
    iIScroll,
    iIheader,
  },
  watch: {
    password(value) {
      console.log(minLenEghit(value))
      if (value.length == 8 && minLenEghit(value)) {
        this.btnAbled = false
      } else {
        this.btnAbled = true
      }
    },
  },
  methods: {
    clearInput() {
      this.btnAbled = true
    },
    onBlurInput(value) {
      if (this.btnAbled) {
        if (value != '') {
          this.$toast.fail('请输入正确的密码')
        } else {
          this.$toast.fail('请输入密码')
        }
      }
    },
    //获取验证码 跳转 传参
    getLogin() {
      this.tel = this.$route.query.tel
      this.code = this.$route.query.code
      if (this.tel) {
        const data = {
          mobile: this.tel,
          newCheckPassword: this.password,
          newPassword: this.password,
          verificationCode: this.code,
        }
        user.checkPassword(data).then((res) => {
          if (res.code == 0) {
            this.$toast.success('重新设置密码成功')
            this.$router.push('/userlogin')
          }
        })
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
    margin-top: 0.28rem;
  }
  .login_veterfiy {
    padding: 0 0.28rem;
    height: 0.22rem;
    font-size: 0.16rem;
    font-family: 'PingFangSC-Regular, PingFang SC';
    font-weight: 400;
    color: #666666;
    line-height: 0.22rem;
    margin-top: 0.08rem;
  }
  .login_telephone {
    padding: 0 0.28rem;
    margin-top: 0.16rem;
    .input_pass {
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
}
</style>
