<template>
  <div id="edit-id-info">
    <van-nav-bar
      title="修改信息"
      left-arrow
      @click-left="$router.push('/drivingLicence')"
    />
    <div class="form-box">
      <van-form @submit="onSubmit" style="height: 100%">
        <div class="filed-box"> 
          <van-field
            v-model="form.number"
            name="number"
            label="车牌号码"
            placeholder="请输入车牌号码"
            required
            :rules="[{ required: true, message: '' }]"
          />
          <van-field
            v-model="form.name"
            name="name"
            label="所有人"
            placeholder="请输入所有人"
            required
            :rules="[{ required: true, message: '' }]"
          />
          <van-field
            v-model="form.carType"
            name="carType"
            label="车辆类型"
            placeholder="请输入车辆类型"
            required
            :rules="[{ required: true, message: '' }]"
          />
          <van-field
            v-model="form.code"
            name="code"
            label="识别代号"
            placeholder="请输入识别代号"
            required
            :rules="[{ required: true, message: '' }]"
          />
          <van-field
            v-model="form.engineCode"
            name="engineCode"
            label="发动机号"
            placeholder="请输入发动机号"
            required
            :rules="[{ required: true, message: '' }]"
          />
          <van-field
            v-model="form.load"
            name="load"
            label="整备质量"
            placeholder="请输入整备质量"
            required
            :rules="[{ required: true, message: '' }]"
          />
          <van-field
            v-model="form.quality"
            name="quality"
            label="核载质量"
            placeholder="请输入核载质量"
            required
            :rules="[{ required: true, message: '' }]"
          />
          <van-field
            v-model="form.size"
            name="size"
            label="外廓尺寸"
            placeholder="请输入外廓尺寸"
            required
            :rules="[{ required: true, message: '' }]"
          />
          <van-field
            readonly
            clickable
            name="calendar"
            v-model="form.date"
            label="有效期限"
            placeholder="请选择有效期限"
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
export default {
  data() {
    return {
      form: {
        number: '',
        name: '',
        date: '',
        carType: '',
        code: '',
        engineCode: '',
        load: '',
        quality: '',
        size: '',
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
      this.$router.push('/drivingLicence')
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