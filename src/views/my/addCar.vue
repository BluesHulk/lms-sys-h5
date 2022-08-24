<template>
  <div id="edit-id-info">
    <van-nav-bar
      title="添加车辆"
      left-arrow
      @click-left="$router.push('/carList')"
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
            v-model="form.axleType"
            name="axleType"
            label="车轴类型"
            readonly
            clickable            
            placeholder="请选择"
            @click="showAxleTypePicker = true" 
          />
          <van-popup 
            v-model="showAxleTypePicker" 
            position="bottom" 
            :style="{ height: '30%' }"
          >        
            <van-picker
              show-toolbar
              :columns="axleTypeColumns"
              @confirm="onAxleTypeConfirm"
              @cancel="showAxleTypePicker = false"
            />       
          </van-popup>           
          <van-field
            v-model="form.letState"
            name="letState"
            label="国标等级"
            readonly
            clickable            
            placeholder="请选择"
            @click="showLetStatePicker = true"            
          />
          <van-popup 
            v-model="showLetStatePicker" 
            position="bottom" 
            :style="{ height: '30%' }"
          >        
            <van-picker
              show-toolbar
              :columns="letStateColumns"
              @confirm="onLetStateConfirm"
              @cancel="showLetStatePicker = false"
            />       
          </van-popup>            
          <van-field
            v-model="form.load"
            name="load"
            label="标准载质量"
            placeholder="请输入"
          >
            <template #button>
              吨
            </template>
          </van-field>
          <van-field
            v-model="form.checkYear"
            name="checkYear"
            label="年检年份"
            readonly
            clickable            
            placeholder="请选择"
            @click="showCheckYearPicker = true"            
          />
          <van-popup 
            v-model="showCheckYearPicker" 
            position="bottom" 
            :style="{ height: '30%' }"
          >        
            <van-picker
              show-toolbar
              :columns="checkYearColumns"
              @confirm="onCheckYearConfirm"
              @cancel="showCheckYearPicker = false"
            />       
          </van-popup>          
          <van-field
            name="name"
            label="使用ETC"
          >
            <template #input>
              <van-radio-group v-model="form.useETC" direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="2">否</van-radio>
              </van-radio-group>
            </template>          
          </van-field>
          <van-field
            v-model="form.name"
            name="name"
            label="飞车翼"
          >
            <template #input>
              <van-radio-group v-model="form.swift" direction="horizontal">
                <van-radio name="1">是</van-radio>
                <van-radio name="2">否</van-radio>
              </van-radio-group>
            </template>           
          </van-field>
          <van-field
            v-model="form.tiepiece"
            readonly
            clickable            
            placeholder="请选择"
            @click="showTiepiecePicker = true"
            name="tiepiece"
            label="拉筋数量"
          />
          <van-popup 
            v-model="showTiepiecePicker" 
            position="bottom" 
            :style="{ height: '30%' }"
          >        
            <van-picker
              show-toolbar
              :columns="tiepiececolumns"
              @confirm="onTiepieceConfirm"
              @cancel="showTiepiecePicker = false"
            />       
          </van-popup>
        </div>
        <div class="button-box">
          <van-button block type="info" native-type="submit">添加</van-button>
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
  Picker,
  Popup,
  NavBar,
  Toast,
  Dialog
  } from 'vant';
  
Vue.use(Picker);
Vue.use(NavBar);
Vue.use(Popup);
Vue.use(Form);
Vue.use(Field);
Vue.use(Toast);
export default {
  data() {
    return {
      form: {
        name: '',
        number: '',
        checkYear: '',
        tiepiece: '',
        letState: '',
        axleType: '', 
        load: '',
        useETC: '',
        swift: '',
      },
      showTiepiecePicker: false,
      showCheckYearPicker: false,
      showLetStatePicker: false,
      showAxleTypePicker: false,
      tiepiececolumns: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      checkYearColumns: ['2012年','2013年','2014年','2015年','2016年','2017年','2018年','2019年','2020年','2021年','2022年','2023年','2024年','2025年','2026年','2027年','2028年'],
      letStateColumns : ['国一', '国二', '国三', '国四', '国五', '国六', ],
      axleTypeColumns: ['B', 'C', 'D', 'E',]
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
      Dialog.confirm({
        title: '温馨提示',
        confirmButtonText: '去完善',
        cancelButtonText: '暂不',
        message: '您已成功添加自有车辆\n是否继续完善车辆信息',
        confirmButtonColor: '#4276F6'
      }).then(() => {
          // on confirm 跳转至编辑车辆信息页面
          this.$router.push('/driverInfo')
        }).catch(() => {
          // 返回车辆列表
          this.$router.push('/carList')
        });
    },
    // 选择拉筋数量
    onTiepieceConfirm(val) {
      this.form.tiepiece = val
      this.showTiepiecePicker = false
    },
    // 选择年检年份
    onCheckYearConfirm(val) {
      this.form.checkYear = val
      this.showCheckYearPicker = false
    },
    // 选择排放阶段
    onLetStateConfirm(val) {
      this.form.letState = val
      this.showLetStatePicker = false
    },
    // 选择车轴类型
    onAxleTypeConfirm(val) {
      this.form.axleType = val
      this.showAxleTypePicker = false
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