import { get,postJson,patch,postFile,qs} from '../index.js'


const taskApi = {
  getTableData(params) {
    // return postJson(`/tenant-lms-account-provide/capitalAccount/page?${qs(params)}` );
    return get(`/management-lms-online-driver-provider/task/order/page`,params );
  },
  getDetail(params) {
    return get(`/management-lms-online-driver-provider​/task​/order​/detail`,params );
  },

}


export default taskApi
