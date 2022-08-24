<template>
  <div id="edit-id-info">
    <van-nav-bar
      title="编辑"
      left-arrow
      @click-left="$router.push({path:'/licenceInfo',query:{type: 'edit'}})"
    />
    <div class="form-box">
      <van-form @submit="onSubmit" style="height: 100%">
        <div class="filed-box"> 
          <van-field
            v-model="form.number"
            name="number"
            label="证件号码"
            :rules="[{ required: true, message: '证件号码不能为空' }]"
          />
          <van-field
            v-model="form.name"
            name="name"
            label="姓名"
            :rules="[{ required: true, message: '姓名不能为空' }]"
          />
          <van-field
            v-model="form.carType"
            name="carType"
            label="准驾车型"
            :rules="[{ required: true, message: '准驾车型不能为空' }]"
          />
          <van-field
            readonly
            clickable
            name="calendar"
            v-model="form.date"
            label="有效期限"
            placeholder="请选择有效期限"
            :rules="[{ required: true, message: '' }]"
            @click="showDatePicker = true"
          />
          <van-popup 
            v-model="showDatePicker" 
            position="bottom" 
            :style="{ height: '30%' }"
          >        
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            title="选择有效期限"
            @cancel="showDatePicker = false"
            @confirm="handleConfirm"
            :min-date="minDate"
            :max-date="maxDate"
          />     
          </van-popup>
        </div>
        <div class="button-box">
          <van-button block type="info" native-type="submit">保存</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { 
  Form, 
  Field, 
  DatetimePicker,
  Popup,
  NavBar,
  Toast
  } from 'vant';

Vue.use(NavBar);
Vue.use(Popup);
Vue.use(Form);
Vue.use(Field);
Vue.use(DatetimePicker);
Vue.use(Toast);
export default {
  data() {
    return {
      form: {
        name: '',
        number: '',
        date: '',
      },
      showDatePicker: false,
      minDate: new Date(2022, 0, 1),
      maxDate: new Date(2050, 12, 31),
      currentDate: '',
    }
  },
  mounted() {
    if(this.$route.query.record){
      this.form = this.$route.query.record
    }
  },
  methods: {
    // 提交表单
    onSubmit(values) {
      console.log('submit', values);
      // 保存信息成功跳转到识别结果页面
      this.$router.push({path:'/licenceInfo',query:{type: 'edit'}})

    },
    // 选择日期
    handleConfirm() {
      this.form.date = this.dateFormat(this.currentDate)
      this.showDatePicker = false
    },
    // 日期格式化
    dateFormat(time) {
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    month = month > 10 ? month : "0" + month;
    day = day > 10 ? day : "0" + day;
    return year + '-' + month + '-' + day
    },    
  }
}
</script>

<style lang="scss" scoped>
#edit-id-info{
  height: 100%;
  background-color:#F9FAFF;
}
.form-box{
  padding: 16px;
  height: 96%;
  .filed-box{
    height: 92%;
  }
  .button-box{
    background-color: #fff;
    position: fixed;
    width: 100%;
    bottom: 0;
    margin: 16px -16px;
    padding: 0 16px;
  }
}
</style>