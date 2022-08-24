/**
 * @description 判读是否为小写字母+数字
 * @param path
 * @returns {boolean}
 */
export function alphanumeric(value) {
  return /^[a-z][a-z\d]{2,30}$/.test(value)
}
/**
 * @description 判读是否为外链
 * @param path
 * @returns {boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @description 校验密码是否小于6位
 * @param value
 * @returns {boolean}
 */
export function isPassword(value) {
  return value.length >= 6
}

/**
 * @description 判断是否为数字
 * @param value
 * @returns {boolean}
 */
export function isNumber(value) {
  const reg = /^[0-9]*$/
  return reg.test(value)
}

/**
 * @description 判断是否为数字
 * @param value
 * @returns {boolean}
 */
export function isPositiveNumber(value) {
  const reg = /^[0-9\.]*$/
  return reg.test(value)
}

/**
 * @description 判断是否是名称
 * @param value
 * @returns {boolean}
 */
export function isName(value) {
  const reg = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/
  return reg.test(value)
}

/**
 * @description 判断是否为IP
 * @param ip
 * @returns {boolean}
 */
export function isIP(ip) {
  const reg =
    /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
  return reg.test(ip)
}

/**
 * @description 判断是否是传统网站
 * @param url
 * @returns {boolean}
 */
export function isUrl(url) {
  const reg =
    /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @description 判断是否是小写字母
 * @param value
 * @returns {boolean}
 */
export function isLowerCase(value) {
  const reg = /^[a-z]+$/
  return reg.test(value)
}

/**
 * @description 判断是否是大写字母
 * @param value
 * @returns {boolean}
 */
export function isUpperCase(value) {
  const reg = /^[A-Z]+$/
  return reg.test(value)
}

/**
 * @description 判断是否是大写字母开头
 * @param value
 * @returns {boolean}
 */
export function isAlphabets(value) {
  const reg = /^[A-Za-z]+$/
  return reg.test(value)
}

/**
 * @description 判断是否是字符串
 * @param value
 * @returns {boolean}
 */
export function isString(value) {
  return typeof value === 'string' || value instanceof String
}

/**
 * @description 判断是否是数组
 * @param arg
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

/**
 * @description 判断是否是端口号
 * @param value
 * @returns {boolean}
 */
export function isPort(value) {
  const reg =
    /^([0-9]|[1-9]\d|[1-9]\d{2}|[1-9]\d{3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/
  return reg.test(value)
}

/**
 * @description 判断是否是手机号
 * @param value
 * @returns {boolean}
 */
export function isPhone(value) {
  const reg = /^1\d{10}$/
  return reg.test(value)
}

/**
 * @description 判断是否是身份证号(第二代)
 * @param value
 * @returns {boolean}
 */
export function isIdCard(value) {
  const reg =
    /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  return reg.test(value)
}

/**
 * @description 判断是否是营业执照
 * @param value
 * @returns {boolean}
 */
export function isbusinessLicense(value) {
  const reg = /^[a-zA-Z0-9]{10,20}$/
  return reg.test(value)
}

/**
 * @description 判断是否是邮箱
 * @param value
 * @returns {boolean}
 */
export function isEmail(value) {
  const reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return reg.test(value)
}

/**
 * @description 判断是否中文
 * @param value
 * @returns {boolean}
 */
export function isChina(value) {
  const reg = /^[\u4E00-\u9FA5]{2,4}$/
  return reg.test(value)
}

/**
 * @description 判断是否为空
 * @param value
 * @returns {boolean}
 */
export function isBlank(value) {
  return (
    value === null ||
    false ||
    value === '' ||
    value.trim() === '' ||
    value.toLocaleLowerCase().trim() === 'null'
  )
}

/**
 * @description 判断是否为固话
 * @param value
 * @returns {boolean}
 */
export function isTel(value) {
  const reg =
    /^(400|800)([0-9\\-]{7,10})|(([0-9]{4}|[0-9]{3})([- ])?)?([0-9]{7,8})(([- 转])*([0-9]{1,4}))?$/
  return reg.test(value)
}

/**
 * @description 判断是否为数字且最多两位小数
 * @param value
 * @returns {boolean}
 */
export function isNum(value) {
  const reg = /^\d+(\.\d{1,2})?$/
  return reg.test(value)
}

export function isMinusNum(value) {
  const reg = /^\d+(\.\d{1,2})?$/
  return reg.test(value)
}
/**
 * @description 判断是否为json
 * @param value
 * @returns {boolean}
 */
export function isJson(value) {
  if (typeof value === 'string') {
    try {
      const obj = JSON.parse(value)
      return !!(typeof obj === 'object' && obj)
    } catch (ignore) { }
  }
  return false
}
/**
 * @description 判断数字、字母、下划线、减号、连字符、空格、英文括号、点
 * @param value
 * @returns {boolean}
 */
export function isAll(value) {
  const reg = /^[\u4E00-\u9FA50-9a-zA-Z\.\-\_\s\(\)]*$/
  return reg.test(value)
}

/**
 * @description 判断数字、字母、下划线
 * @param value
 * @returns {boolean}
 */
export function numberWord(value) {
  console.log(value)
  const reg = /^[0-9a-zA-Z_]{1,}$/
  return reg.test(value)
}

export function regText(text) {
  var reg = /^[\u4E00-\u9FA5A-Za-z0-9]+$/
  return reg.exec(text)
}

/**
 * @description 判断车牌号
 * @param value
 * @returns {boolean}
 */
export function carNum(text) {
  var reg =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
  return reg.test(text)
}

/**
 * @description 判断身份证
 * @param value
 * @returns {boolean}
 */
export function idCard(text) {
  var reg =
    /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  return reg.test(text)
}

export function funLevelLimit(data, now_func, funcRuleList) {
  // const now_func = "del";  假设当前方法所属的功能点是删除 del
  let allow = false // 允许操作标志，默认值是不允许，当经历一番操作后它变成true就说明可以操作

  // 筛选出当前功能点的规则数组
  if (funcRuleList.length < 1) {
    allow = true
  } else {
    let ruleList = funcRuleList.filter((z) => {
      return z.url == now_func
    })

    // 遍历满足条件的规则列表，如果没有规则就说明不限制直接允许操作
    if (ruleList.length < 1) {
      allow = false
    }
    ruleList.forEach((z) => {
      // eq公式代表等于
      if (z.expression == 'eq') {
        // 判断当前记录中当前字段的值是否等于规则里设置的值
        if (data[z.fieldName] == z.fieldValue) {
          allow = true
        }
      }
      // in公式代表包含
      if (z.expression == 'in') {
        // 包含即多个等于，遍历处理
        let values = z.fieldValue.split(',')
        values.forEach((inz) => {
          if (data[z.fieldName] == inz) {
            allow = true
          }
        })
      }
      if (z.expression == 'ne') {
        if (data[z.fieldName] != z.fieldValue) {
          allow = true
        }
      }
      if (z.expression == 'lt') {
        if (data[z.fieldName] < z.fieldValue) {
          allow = true
        }
      }
      if (z.expression == 'gt') {
        if (data[z.fieldName] > z.fieldValue) {
          allow = true
        }
      }
      if (z.expression == 'le') {
        if (data[z.fieldName] <= z.fieldValue) {
          allow = true
        }
      }
      if (z.expression == 'ge') {
        if (data[z.fieldName] >= z.fieldValue) {
          allow = true
        }
      }
    })
  }

  return allow
}

/**
 * @description 判断一体机的码
 * @param value
 * @returns {boolean}
 */
export function isAio(value) {
  const reg =
    /^[\u4E00-\u9FA50-9a-zA-Z\.\-\_\/\:\!\@\#\$\%\&\*\-\=\+\;\‘\(\)]*$/
  return reg.test(value)
}

// 包含大小写字符 长度最小为8
export function isCase(value) {
  const reg = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])[0-9A-Za-z!)-]{8,}$/;
  return reg.test(value)
}

/**
 * @description 判断数字、字母、长度最小8
 * @param value
 * @returns {boolean}
 */
 export function minLenEghit(value) {
  console.log(value)
  const reg = /^[0-9a-zA-Z]{8,}$/
  return reg.test(value)
}
