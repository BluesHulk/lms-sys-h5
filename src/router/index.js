import Login from '@/views/login'
import UserLogin from '@/views/login/userlogin'
import Code from '@/views/login/code'
import Find from '@/views/login/find'
import Reset from '@/views/login/reset'
import Online from '@/views/online'
import Task from '@/views/task'
import Done from '@/views/task/detail/done.vue'
import Wait from '@/views/task/detail/wait.vue'
import Waybill from '@/views/waybill'
// 我的&消息列表页
import Message from '@/views/message'
import My from '@/views/my'
import DriverInfo from '@/views/my/driverInfo'
import IdInfo from '@/views/my/idInfo'
import LicenceInfo from '@/views/my/licenceInfo'
import EditLicenceInfo from '@/views/my/editLicenceInfo'
import CertificateInfo from '@/views/my/certificateInfo'
import EditIdInfo from '@/views/my/editIdInfo'
import EditCarInfo from '@/views/my/editCarInfo'
import CarList from '@/views/my/carList'
import AddCar from '@/views/my/addCar'
import CarInfo from '@/views/my/CarInfo'
import DrivingLicence from '@/views/my/drivingLicence'
import EditDrivingLicence from '@/views/my/editDrivingLicence'
import TransportLicence from '@/views/my/transportLicence'
import SystemSet from '@/views/my/systemSet'
import AccountSafety from '@/views/my/accountSafety'
import ChangeTel from '@/views/my/changeTel'
import FindPassword from '@/views/my/findPassword'
import Feedback from '@/views/my/feedback'
import AboutUs from '@/views/my/aboutUs'
const rootPath = '';
const routes = [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
    },
    component: Login,
  },
  {
    path: "/userlogin",
    name: "userlogin",
    meta: {
      title: "账号密码登录",
    },
    component: UserLogin,
  },
  {
    path: "/reset",
    name: "reset",
    meta: {
      title: "重设密码",
    },
    component: Reset,
  },
  {
    path: "/find",
    name: "find",
    meta: {
      title: "找回密码",
    },
    component: Find,
  },
  {
    path: "/code",
    name: "code",
    meta: {
      title: "获取短信验证码",
    },
    component: Code,
  },
  {
    path: '',
    redirect: '/task'
  },
  {
    path: '/task',
    name: 'task',
    meta: {
      title: "任务单",
    },
    component: Task
  },
  {
    path: '/taskdetail/done',
    name: 'taskdetail',
    meta: {
      title: "任务单详情",
    },
    component: Done
  },
  {
    path: '/taskdetail/wait',
    name: 'taskdetail',
    meta: {
      title: "任务单详情",
    },
    component: Wait
  },
  {
    path: '/waybill',
    name: 'Waybill',
    meta: {
      title: "运单",
    },
    component: Waybill
  },{

    path: '/onlineLine',
    name: 'onlineLine',
    meta: {
      title: "运单",
    },
    component: Online
  },
  /* 消息列表&我的 */
  {
    path: '/message',
    name: 'Message',
    meta: {
      title: "消息",
    },
    component: Message
  },
  {
    path: '/my',
    name: 'my',
    meta: {
      title: "我的",
    },
    component: My
  },
  {
    path: '/driverInfo',
    name: 'driverInfo',
    meta: {
      title: "司机信息",
    },
    component: DriverInfo
  },
  {
    path: '/idInfo',
    name: 'idInfo',
    meta: {
      title: "身份证信息",
    },
    component: IdInfo
  },
  {
    path: '/editIdInfo',
    name: 'editIdInfo',
    meta: {
      title: "编辑",
    },
    component: EditIdInfo
  },
  {
    path: '/licenceInfo',
    name: 'licenceInfo',
    meta: {
      title: "驾驶证信息",
    },
    component: LicenceInfo
  },
  {
    path: '/editLicenceInfo',
    name: 'editLicenceInfo',
    meta: {
      title: "编辑",
    },
    component: EditLicenceInfo
  },
  {
    path: '/certificateInfo',
    name: 'certificateInfo',
    meta: {
      title: "编辑",
    },
    component: CertificateInfo
  },
  {
    path: '/carList',
    name: 'carList',
    meta: {
      title: "车辆列表",
    },
    component: CarList
  },
  {
    path: '/carInfo',
    name: 'carInfo',
    meta: {
      title: "车辆信息",
    },
    component: CarInfo
  },
  {
    path: '/editCarInfo',
    name: 'editCarInfo',
    meta: {
      title: "编辑",
    },
    component: EditCarInfo
  },
  {
    path: '/addCar',
    name: 'addCar',
    meta: {
      title: "添加车辆",
    },
    component: AddCar
  },
  {
    path: '/drivingLicence',
    name: 'drivingLicence',
    meta: {
      title: "行驶证信息",
    },
    component: DrivingLicence
  },
  {
    path: '/editDrivingLicence',
    name: 'editDrivingLicence',
    meta: {
      title: "行驶证信息",
    },
    component: EditDrivingLicence
  },
  {
    path: '/transportLicence',
    name: 'transportLicence',
    meta: {
      title: "道路运输证信息",
    },
    component: TransportLicence
  },
  {
    path: '/systemSet',
    name: 'systemSet',
    meta: {
      title: "设置",
    },
    component: SystemSet
  },
  {
    path: '/accountSafety',
    name: 'accountSafety',
    meta: {
      title: "设置",
    },
    component: AccountSafety
  },
  {
    path: '/changeTel',
    name: 'changeTel',
    meta: {
      title: "修改绑定手机号",
    },
    component: ChangeTel
  },
  {
    path: '/findPassword',
    name: 'findPassword',
    meta: {
      title: "修改密码",
    },
    component: FindPassword
  },
  {
    path: '/feedback',
    name: 'feedback',
    meta: {
      title: "意见反馈",
    },
    component: Feedback
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    meta: {
      title: "关于我们",
    },
    component: AboutUs
  },

].map(route => {
  route.path = rootPath + route.path;
  return route;
});
// 404 页
routes.push({
  path: '*',
  redirect: '/'
});
export default routes

